var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const connection = require('../database')
const session=require('express-session')//세션 만드는거 도와줌
const passport= require('passport')//회원인증 도와줌
const LocalStrategy=require('passport-local')//아이디 비번 인증 도와줌

/* routes about account settings
 */
router.use(passport.initialize())
router.use(session({
  secret:'암호화에 쓸 비번',
  resave:false,
  saveUninitialized:true,
  // store:
}))

module.exports = router;
