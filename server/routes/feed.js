const express = require('express');
const { query } = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const sql = `
        SELECT
            up.PostID AS id,
            u.UserName AS username,
            u.DefaultProfilePic AS profilePicture,
            pm.MediaURL AS url,
            pm.Description AS caption,
            u.SocialIG AS instagram,
            u.SocialTikTok AS tiktok,
            u.SocialX AS x
        FROM
            UserPosts up
        JOIN Users u ON up.UserID = u.UserID
        JOIN PostMedia pm ON up.PostID = pm.PostID
        ORDER BY id DESC
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
            up.PostID AS id,
            u.UserName AS username,
            u.DefaultProfilePic AS profilePicture,
            pm.MediaURL AS url,
            pm.Description AS caption,
            u.SocialIG AS instagram,
            u.SocialTikTok AS tiktok,
            u.SocialX AS x
        FROM
            UserPosts up
        JOIN Users u ON up.UserID = u.UserID AND u.Type = 'athlete'
        JOIN PostMedia pm ON up.PostID = pm.PostID
        ORDER BY id DESC
        `
        const rows = await query(sql);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});
module.exports = router;