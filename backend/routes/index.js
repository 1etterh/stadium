var express = require('express');
var router = express.Router();
require('dotenv').config()
const bcrypt = require('bcrypt')
const connection = require('../database')
const session=require('express-session')//세션 만드는거 도와줌
const passport= require('passport')//회원인증 도와줌
const LocalStrategy=require('passport-local')//아이디 비번 인증 도와줌
const MySQLStore = require('express-mysql-session')(session)//세션 저장해줌
/* routes about account settings
 */

const options={
  host:process.env.RDS_HOSTNAME,
  port:process.env.RDS_PORT,
  user:process.env.RDS_USERNAME,
  password:process.env.RDS_PASSWORD,
  database:'credential'
}

const sessionStore = new MySQLStore(options)
// console.log('Session Store')
router.use(passport.initialize())
router.use(session({
  key:'session_cookie_name',
  secret:'session_cookie_secret',
  resave:false,
  saveUninitialized:false,
  store: sessionStore
}))

sessionStore.onReady().then(()=>{
  console.log('MySQLStore ready')
})
.catch((err)=>{
  console.error(err)
})
router.use(passport.session())

passport.use(new LocalStrategy((username, password, done) => {
  connection.query('SELECT * FROM credential.user WHERE username = ?', [username], (err, results) => {
    if (err) {
      return done(err);
    }
    if (!results.length) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  });
}));



passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Passport 세션 역직렬화 설정

passport.deserializeUser((id, done) => {
  connection.query('SELECT * FROM credential.user WHERE username = ?', [id], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return done(err);
    }
    if (!results.length) {
      console.error('No user found with username:', id);
      return done(null, false);
    }
    const user = results[0];
    console.log('Deserialized user:', user);
    done(null, user);
  });
});


router.post('/login',async(req,res,next)=>{
  passport.authenticate('local', (error,user,info)=>{
      if(error) return res.status(500).json(error)
      if(!user) return res.status(401).json(info.message)
      req.logIn(user,(err)=>{
          if(err) return next(err)
          res.redirect('/')
      })
  })(req,res,next)
})

router.post('/register',async(req,res,next)=>{
  console.log(req.body.username, req.body.password)
  let hash = await bcrypt.hash(req.body.password,10)
  const q=`INSERT INTO credential.user (username, password) VALUES ('${req.body.username}', '${hash}')`
  connection.query(q)
  let r = 1
  res.send(JSON.stringify({r}))
})


module.exports = router;
