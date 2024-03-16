const express = require('express');
const db = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createToken = (userID) => {
    return jwt.sign({UserID: userID}, process.env.SECRET, { expiresIn: '3d'})
}

const router = express.Router();

router.post('/', async (req, res) => {
    const {username, password} = req.body;

    try {
        //Validate user input
        var error = validateInput(username, password);
        if (Object.keys(error.error).length == 0) {
            const user = await checkCredentials(username, password, error)
            if(!user) {
                res.status(400).json(error)
            } else {
                const token = createToken(user.UserID);
                res.status(200).json({ userID: user.UserID, username: user.UserName, type: user.Type, token: token })
            }
        } else {
            res.status(400).json(error)
        }
    } catch (err) {
        res.status(500).json({ error: { server: err.message } });
    }
});

function validateInput(username, password) {
    var error = { error: {} };

    //Username validation
    if (username == "") {
        error.error.username = "Username is required";
    } 

    //Password validation
    if (password == "") {
        error.error.password = "Password is required";
    } 

    return error;
}

async function checkCredentials(username, password, error) {
    const rows = await getUser(username);
    if(rows.length == 0) {
        error.error.username = "User not found"
        return null;
    }
    const user = rows[0];

    const match = await bcrypt.compare(password, user.Password)
    if(!match) {
        error.error.password = "Incorrect password";
        return null;
    }
    return user;
}

async function getUser(username) {
    try {
        return await db.query(`SELECT * FROM Users WHERE UserName = '${username}'`);
    } catch (err) {
        throw Error('Database Error')
    }
}

module.exports = router;