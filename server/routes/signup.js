const express = require('express');
const db = require('../database');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createToken = (userID) => {
    return jwt.sign({UserID: userID}, process.env.SECRET, { expiresIn: '3d'})
}

const router = express.Router();
const usernamePattern = /^[a-zA-Z_\-.\d]*$/;

router.post('/', async (req, res) => {
    const { firstName, lastName, email, username, password, retypedPassword, type } = req.body;

    try {
        //Validate user input
        var error = await validateInput(firstName, lastName, email, username, password, retypedPassword, type);

        //Send http response
        if (Object.keys(error.error).length > 0) {
            res.status(400).json(error)
        } else {
            const rows = await addUser(firstName, lastName, email, username, password, type)
            const token = createToken(rows.insertId)

            // adjust user information sent to frontend if necessary, make sure to adjust this in login.js as well to match
            res.status(200).json({ userID: rows.insertId, username: username, email: email, name: `${firstName} ${lastName}`, type: type, token: token })
        }
    } catch (err) {
        res.status(500).json({ error: { server: err.message } });
    }
});

async function validateInput(firstName, lastName, email, username, password, retypedPassword, type) {
    var error = { error: {} };

    //First name validation
    if (firstName == "") {
        error.error.firstName = "First name is required";
    }

    //Last name validation
    if (lastName == "") {
        error.error.lastName = "Last name is required";
    }

    //Email validation
    if (email == "") {
        error.error.email = "Email is required";
    } else if (!validator.isEmail(email)) {
        error.error.email = "Invalid email address";
    } else if (await doesEmailExist(email)) {
        error.error.email = "Account with this email already exists"
    }

    //Username validation
    if (username == "") {
        error.error.username = "Username is required";
    } else if(!usernamePattern.test(username)) {
        error.error.username = "Username must only contain letters, numbers, or symbols: . - _, with no spaces"
    }else if (await doesUsernameExist(username)) {
        error.error.username = "Username already exists";
    }

    //Password validation
    if (password == "") {
        error.error.password = "Password is required";

    } else if (!validator.isStrongPassword(password)) {
        error.error.password = "Password must be at least 8 characters long, contain at least 1 uppercase letter, at least 1 lowercase letter, at least 1 number, and at least 1 symbol";
    }

    //Retyped password validation
    if (password != retypedPassword) {
        error.error.retypedPassword = "Passwords do not match";
    }

    //Account type validation
    if (type != "athlete" && type != "sponsor") {
        error.error.type = "Select account type";
    }

    return error;
}

async function addUser(firstName, lastName, email, username, password, type) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        return await db.query(`INSERT INTO Users (FirstName, LastName, UserName, Email, Password, Type) VALUES ('${firstName}', '${lastName}', '${username}', '${email}', '${hash}', '${type}');`);
    } catch (err) {
        throw Error('Unable to sign up user')
    }
}

async function doesEmailExist(email) {
    try {
        const rows = await db.query(`SELECT * FROM Users WHERE Email = '${email}'`);
        return rows.length != 0;
    } catch (err) {
        throw Error('Database Error')
    }
}

async function doesUsernameExist(username) {
    try {
        const rows = await db.query(`SELECT * FROM Users WHERE UserName = '${username}'`);
        return rows.length != 0;
    } catch (err) {
        throw Error('Database Error')
    }
}

module.exports = router;