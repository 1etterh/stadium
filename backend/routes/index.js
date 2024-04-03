var express = require('express');
var router = express.Router();
const postdata=require('./../postdata.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('HOMEPAGE')
  res.send("postdata");
});



module.exports = router;
