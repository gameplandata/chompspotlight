const express = require('express');
const { query } = require('../database');
const authenticateToken = require('../authenticateToken');

const router = express.Router();

// Endpoint to follow a user
router.post('/follow/:id', authenticateToken, async (req, res) => {
    const authHeader = req.headers['authorization'];
    const payload = JSON.parse(Buffer.from(authHeader.split('.')[1], 'base64').toString('ascii'));

    const source = payload.UserID;
    const target = req.params.id;

    try {
        const sql = `INSERT INTO Follows (SourceID, TargetID, TimeDate) VALUES (${source}, ${target}, NOW());`
        const followUser = await query(sql);

        if (followUser.affectedRows == 1) {
            res.status(200);
        } else {
            // user already follows
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Endpoint to unfollow a user
router.post('/unfollow/:id', authenticateToken, async (req, res) => {
    const authHeader = req.headers['authorization'];
    const payload = JSON.parse(Buffer.from(authHeader.split('.')[1], 'base64').toString('ascii'));

    const source = payload.UserID;
    const target = req.params.id;

    try {
        const sql = `DELETE FROM Follows WHERE SourceID = ${source} AND TargetID = ${target};`
        const unfollowUser = await query(sql);

        if (unfollowUser.affectedRows == 1) {
            res.status(200);
        } else {
            // user wasn't already following
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Endpoint to check if user is following the target
router.get('/isFollowing/:id', authenticateToken, async (req, res) => {
    const authHeader = req.headers['authorization'];
    const payload = JSON.parse(Buffer.from(authHeader.split('.')[1], 'base64').toString('ascii'));

    const source = payload.UserID;
    const target = req.params.id;

    try {
        const sql = `SELECT COUNT(*) FROM Follows WHERE SourceID = ${source} AND TargetID = ${target};`
        const isFollowing = await query(sql);

        if (isFollowing[0] && isFollowing[0]['COUNT(*)'] == 1) {
            res.status(200).json({ isFollowing: true })
        } else {
            res.status(200).json({ isFollowing: false })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Endpoint to get follow count
router.get('/followCount/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const sql = `SELECT COUNT(*) FROM Follows WHERE SourceID = ${userId};`
        const followCount = await query(sql);

        if (followCount && followCount[0]) {
            res.status(200).json({ followCount: followCount[0]['COUNT(*)'] });
        } else {
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Endpoint to get follower count
router.get('/followerCount/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const sql = `SELECT COUNT(*) FROM Follows WHERE TargetID = ${userId};`
        const followerCount = await query(sql);

        if (followerCount && followerCount[0]) {
            res.status(200).json({ followerCount: followerCount[0]['COUNT(*)'] });
        } else {
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

//Endpoint to get list of following
router.get('/followings/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const sql = `SELECT Users.UserID, Users.FirstName, Users.LastName, Users.UserName FROM Follows INNER JOIN Users ON Follows.TargetID = Users.UserID WHERE Follows.SourceID = ${userId}`;
        const followings = await query(sql);

        if (followings) {
            res.status(200).json({ followings });
        } else {
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

//Endpoint to get list of followers
//Endpoint to get list of following
router.get('/followers/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const sql = `SELECT Users.UserID, Users.FirstName, Users.LastName, Users.UserName FROM Follows INNER JOIN Users ON Follows.SourceID = Users.UserID WHERE Follows.TargetID = ${userId}`;
        const followers = await query(sql);

        if (followers) {
            res.status(200).json({ followers });
        } else {
            res.status(400);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;