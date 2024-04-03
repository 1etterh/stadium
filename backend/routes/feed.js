var express = require('express');
var router = express.Router();
const connection= require('../database')
// const postdata=require('./../postdata.json')
// const userdata=require('./../userdata.json')
/* GET feed  */
// connection.connect();
const joinQuery = 'SELECT * FROM credential.user t1 Join post.post t2 on t2.userId=t1.userId'
router.get('/',async(req, res, next)=>{
  console.log('/routes/feed.js')
  await connection.query(joinQuery,(err,rows,fields)=>{
    if(err) throw err;
    console.log(rows)
    res.send(rows)
  })
  
});

module.exports = router;
