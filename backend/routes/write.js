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
// Create S3 client

const createPresignedUrlWithClient = ({ region, bucket, key }) => {
  const client = new S3Client({ region });
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
// const listObjectsParams = { Bucket: process.env.S3_BUCKET_NAME };
// s3Client.send(new ListObjectsCommand(listObjectsParams))
//   .then(data => {
//     console.log("List of objects in the bucket:", data.Contents);
//   })
//   .catch(error => {
//     console.error("Error listing objects in the bucket:", error);
//   });

// Multer middleware for file upload to S3




// Middleware to check if user is authenticated
router.use(isLoggedIn);
// Route to publish a post with image upload to S3
router.post('/',async (req, res) => {
  console.log(req.file)
  const clientUrl = await createPresignedUrlWithClient({
    region : process.env.S3_AWS_REGION,
    bucket : process.env.S3_BUCKET_NAME,
    key: req.file.originalname
  })
  try {
    // if (!req.file) {
    //   return res.status(400).json({ message: 'No file uploaded' });
    // }

    // Access the uploaded image URL in S3
    const imageUrl = clientUrl;
    // Access the caption using req.body.caption
    const contents = req.body.contents;
    // Retrieve userId from the session
    const userId = req.user.userId; // Assuming userId is stored in req.user.id based on the authentication middleware
    
    // Get the current datetime
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Logic to save the post to the database, along with the image URL, caption, userId, and datetime
    const query = 'INSERT INTO post.post (contents, image,userId, datetime) VALUES (?, ?, ?, ?)';
  
    connection.query(query, [contents, imageUrl, userId, datetime], (error, results, fields) => {
      if (error) {
        console.error('Error inserting new post:', error);
        return res.status(500).json({ message: 'Error inserting new post' });
      }
      
      // Successfully added the new post
      res.status(200).json({ success: true }); // Send success status code (200) and image URL
    });
  } catch (error) {
    console.error('Error uploading image to S3:', error);
    res.status(500).json({ message: 'Error uploading image to S3' });
  }
});


  
module.exports = router;
