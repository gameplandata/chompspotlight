const express = require('express');
const { query } = require('../database'); 

const router = express.Router();

// Endpoint to fetch user profile information
router.get('/fetch/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const sql = 'SELECT UserID, UserName, FirstName, LastName, Email, Type, SocialIG, SocialTikTok, SocialX, DefaultProfilePic FROM Users WHERE UserName = ?';
    const userInfo = await query(sql, [username]);

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

// Endpoint to get user posts & user info
router.get('/:id/posts', async (req, res) => { //, authenticateToken
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

module.exports = router;