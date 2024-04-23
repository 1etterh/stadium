var express = require('express');
var router = express.Router();
const connection= require('../database')

/* GET feed  */


const joinQuery = 'SELECT * FROM post.postview'
router.get('/',async(req, res, next)=>{
  console.log('/routes/feed.js')
  await connection.query(joinQuery,(err,rows,fields)=>{
    if(err) throw err;
    // console.log(rows)
    res.send(rows)
  })
  
});

module.exports = router;
