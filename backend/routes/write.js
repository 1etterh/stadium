const express = require('express');
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
const router = express.Router();
const isLoggedIn = require('./../middleware/isAuthenticated');
const connection = require('../database');
const path=require("path")
// Create S3 client
const s3Client = new S3Client({
  region: process.env.S3_AWS_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  }
});




// Multer middleware for file upload to S3
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,done){
      done(null,'uploads/')
    },
    filename:function(req,file,done){
    
      const fileName=Date.now()+file.originalname;
      done(null,fileName)
    }
  })
});


if(s3Client){
  console.log('s3 Connected')
}
// Middleware to check if user is authenticated
router.use(isLoggedIn);

// Route to publish a post with image upload to S3
router.post('/',upload.single('image'),async (req, res) => {
  console.log(req.file)
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Access the uploaded image URL in S3
    const imageUrl = req.file.location;
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
