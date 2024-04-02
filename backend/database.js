const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
require('dotenv').config()
const connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
  });

// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('connected to rds for mysql')
// })


module.exports=connection;