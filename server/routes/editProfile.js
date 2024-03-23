const express = require('express');
const { query } = require('../database'); // Adjust path as necessary
const authenticateToken = require('../authenticateToken'); // Your JWT middleware

const router = express.Router();

// Endpoint to fetch user profile information
router.get('/fetch/:id', authenticateToken, async (req, res) => {
  const userId = req.params.id;

  try {
    const sql = 'SELECT UserName, FirstName, LastName, Email, Type, SocialIG, SocialTikTok, SocialX FROM Users WHERE UserID = ?';
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
  const { UserName, FirstName, LastName, Email, SocialIG, SocialTikTok, SocialX } = req.body; // Extracting user info from request body

  try {
    const updateSql = `
      UPDATE Users
      SET UserName = ?, FirstName = ?, LastName = ?, Email = ?, SocialIG = ?, SocialTikTok = ?, SocialX = ?
      WHERE UserID = ?`;

    const result = await query(updateSql, [UserName, FirstName, LastName, Email, SocialIG, SocialTikTok, SocialX, userID]);

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

module.exports = router;
