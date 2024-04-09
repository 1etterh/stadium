const express = require('express');
const { S3Client, ListObjectsCommand,PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();
const router = express.Router();
const isLoggedIn = require('./../middleware/isAuthenticated');
const connection = require('../database');
const path=require("path")
const https= require('https')
const fromIni=require('@aws-sdk/credential-providers');
const HttpRequest=require('@smithy/protocol-http')
const {getSignedUrl, S3RequestPresigner} = require("@aws-sdk/s3-request-presigner")
const parseUrl=require('@smithy/url-parser')
const formatUrl = require('@aws-sdk/util-format-url')
const Hash = require('@smithy/hash-node')
router.use(isLoggedIn);






const createPresignedUrlWithClient = ({ region, bucket, key }) => {
  const client = new S3Client({ 
    region: process.env.S3_AWS_REGION,
    credentials:{
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY
    }
   });
  const command = new PutObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(client, command, { expiresIn: 3600 });
};

function put(url, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      { method: "PUT", headers: { "Content-Length": new Blob([data]).size } },
      (res) => {
        let responseBody = "";
        res.on("data", (chunk) => {
          responseBody += chunk;
        });
        res.on("end", () => {
          resolve(responseBody);
        });
      },
    );
    req.on("error", (err) => {
      reject(err);
    });
    req.write(data);
    req.end();
  });
}


// Presigned URL generation endpoint
router.post('/presigned-url', async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    const clientUrl = await createPresignedUrlWithClient({
      region: process.env.S3_AWS_REGION,
      bucket: process.env.S3_BUCKET_NAME,
      key: fileName,
      contentType: fileType
    });
    console.log('function Put')
    await put(clientUrl, fileName)

    res.json({ url: clientUrl });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).json({ message: 'Error generating presigned URL' });
  }
});

// Write operation endpoint
router.post('/write', async (req, res) => {
  try {
    const { contents, imageUrl } = req.body;
    const userId=req.user.userId
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Logic to save the post to the database, along with the image URL, caption, userId, and datetime
    const query = 'INSERT INTO post.post (contents, image, userId, datetime) VALUES (?, ?, ?, ?)';
    connection.query(query, [contents, imageUrl, userId, datetime])
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error writing post to database:', error);
    res.status(500).json({ message: 'Error writing post to database' });
  }
});




module.exports = router;
