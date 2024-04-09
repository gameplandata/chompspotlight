const express = require('express');
const { query } = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const sql = `
        SELECT
            up.PostID,
            u.UserName,
            u.DefaultProfilePic,
            pm.MediaURL,
            pm.Description,
            u.SocialIG,
            u.SocialTikTok,
            u.SocialX,
            u.FirstName,
            u.LastName,
            u.Email
        FROM
            UserPosts up
        JOIN Users u ON up.UserID = u.UserID
        JOIN PostMedia pm ON up.PostID = pm.PostID
        ORDER BY up.PostID DESC
        `
        const rows = await query(sql);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

router.get('/athlete', async (req, res) => {
    try {
        const sql = `
        SELECT
            up.PostID,
            u.UserName,
            u.DefaultProfilePic,
            pm.MediaURL,
            pm.Description,
            u.SocialIG,
            u.SocialTikTok,
            u.SocialX,
            u.FirstName,
            u.LastName,
            u.Email
        FROM
            UserPosts up
        JOIN Users u ON up.UserID = u.UserID AND u.Type = 'athlete'
        JOIN PostMedia pm ON up.PostID = pm.PostID
        ORDER BY up.PostID DESC
        `
        const rows = await query(sql);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

router.get('/sponsor', async (req, res) => {
    try {
        const sql = `
        SELECT
            up.PostID,
            u.UserName,
            u.DefaultProfilePic,
            pm.MediaURL,
            pm.Description,
            u.SocialIG,
            u.SocialTikTok,
            u.SocialX,
            u.FirstName,
            u.LastName,
            u.Email
        FROM
            UserPosts up
        JOIN Users u ON up.UserID = u.UserID AND u.Type = 'sponsor'
        JOIN PostMedia pm ON up.PostID = pm.PostID
        ORDER BY up.PostID DESC
        `
        const rows = await query(sql);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;