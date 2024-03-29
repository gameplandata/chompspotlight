const express = require('express');
const { query, pool } = require('../database'); 
const authenticateToken = require('../authenticateToken'); 

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Endpoint to fetch user profile information
router.get('/fetch/:id', authenticateToken, async (req, res) => {
  const userId = req.params.id;

  try {
    const sql = 'SELECT UserName, FirstName, LastName, Email, Type, SocialIG, SocialTikTok, SocialX, DefaultProfilePic FROM Users WHERE UserID = ?';
    const userInfo = await query(sql, [userId]);

    if (userInfo.length > 0) {
      res.json(userInfo[0]);
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to update user profile information
router.post('/update/:id', authenticateToken, async (req, res) => {
  const userID = req.params.id;
  const { UserName, FirstName, LastName, Email, SocialIG, SocialTikTok, SocialX, DefaultProfilePic } = req.body; 

  try {
    const updateSql = `
      UPDATE Users
      SET UserName = ?, FirstName = ?, LastName = ?, Email = ?, SocialIG = ?, SocialTikTok = ?, SocialX = ?, DefaultProfilePic = ?
      WHERE UserID = ?`;

    const result = await query(updateSql, [UserName, FirstName, LastName, Email, SocialIG, SocialTikTok, SocialX, DefaultProfilePic, userID]);

    if (result.affectedRows > 0) {
      res.json({ message: 'Profile updated successfully!' });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get user posts & user info
router.get('/user/:id/posts', authenticateToken, async (req, res) => {
  const userId = req.params.id;

  const sql = `
      SELECT 
        u.UserID,
        pm.PostID, 
        pm.MediaURL, 
        pm.Description,
        u.UserName, 
        u.SocialIG, 
        u.SocialTikTok, 
        u.SocialX, 
        u.DefaultProfilePic
      FROM UserPosts up
      JOIN PostMedia pm ON up.PostID = pm.PostID
      JOIN Users u ON up.UserID = u.UserID
      WHERE up.UserID = ?
  `;

  try {
      const mediaUrls = await query(sql, [userId]);

      // Instead of returning a 404 error when no media is found, return an empty list
      res.json(mediaUrls.length > 0 ? mediaUrls : []);
  } catch (error) {
      console.error('Error fetching media URLs:', error);
      res.status(500).json({ message: 'Server error while fetching media URLs' });
  }
});

// Endpoint to insert UserID & PostID in UserPosts and insert PostID, MediaURL, Description in PostMedia
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/post/new/:id', authenticateToken, upload.single('media'), async (req, res) => {
  const UserID = req.params.id; // Or extract UserID from token if it's encoded there
  const { Description } = req.body; // Extract description from form data

  try {
      // Insert into UserPosts to generate a PostID
      const insertUserPostSql = `INSERT INTO UserPosts (UserID) VALUES (?)`;
      const userPostResult = await query(insertUserPostSql, [UserID]);
      const PostID = userPostResult.insertId;

      if (req.file) {
          const fileExtension = path.extname(req.file.originalname);
          const filename = `${PostID}${fileExtension}`;
          const filePath = path.join('media', filename);

          // Save the file from memory to disk
          fs.writeFileSync(path.join(__dirname, '..', filePath), req.file.buffer);

          // Insert into PostMedia using the generated PostID
          const MediaURL = `${filename}`; 
          const insertPostMediaSql = `INSERT INTO PostMedia (PostID, MediaURL, Description) VALUES (?, ?, ?)`;
          await query(insertPostMediaSql, [PostID, MediaURL, Description || null]);

          res.json({ message: 'Post and media uploaded successfully', PostID, MediaURL });
      } else {
          // Handle case when no media file is uploaded, if necessary
          res.status(400).json({ message: 'Media file is required.' });
      }
  } catch (error) {
      console.error('Error in post creation:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to delete a post
router.delete('/posts/:PostID', authenticateToken, async (req, res) => {
  const postID = req.params.PostID;
  let connection;

  try {
    connection = await pool.getConnection();
    
    await connection.beginTransaction();

    // Fetch MediaURL before deletion
    const [media] = await connection.query(`SELECT MediaURL FROM PostMedia WHERE PostID = ?`, [postID]);
    const mediaURL = media[0]?.MediaURL;

    // Proceed with deletion in the database
    await connection.query(`DELETE FROM PostMedia WHERE PostID = ?`, [postID]);
    await connection.query(`DELETE FROM UserPosts WHERE PostID = ?`, [postID]);

    await connection.commit();

    // If a media file exists, delete it from the filesystem
    if (mediaURL) {
      const filePath = path.join(__dirname, '..', 'media', mediaURL);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Error deleting media file:", err);
        // Log or handle error when file deletion fails
      });
    }
    
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    // Rollback the transaction on error
    if (connection) await connection.rollback();
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server error while deleting post' });
  } finally {
    // Release the connection back to the pool
    if (connection) await connection.release();
  }
});

module.exports = router;