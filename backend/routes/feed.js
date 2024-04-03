var express = require('express');
var router = express.Router();
const postdata=require('./../postdata.json')
const userdata=require('./../userdata.json')
/* GET feed  */

router.get('/',async(req, res, next)=>{
  console.log('/routes/feed.js')
  res.send({postdata:postdata, userdata:userdata})
});

module.exports = router;
