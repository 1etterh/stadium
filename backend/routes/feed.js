var express = require('express');
var router = express.Router();
const connection=require('./../database.js')
/* GET feed  */
connection.connect((err)=>{
  if(err) throw err;
  console.log("routes/feed.js db connected");
});
router.get('/feed',async(req, res, next)=>{
  let r= await connection.query('select * from post')
  res.send(r)
});

module.exports = router;
