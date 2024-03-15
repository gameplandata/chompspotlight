const express = require('express');
const db = require('../database');
const validator = require('validator');

const router = express.Router();

//Post method to send command to insert row into database
router.post('/', async (req, res) => {
    const { firstName, lastName, email, username, password, retypedPassword, type} = req.body;
    //perform validation here
    if(!validator.isEmail(email)) {
        res.status(400).json({error: "Not a valid email."})
    } else {
        res.status(200).json({msg: firstName});
    }
    //addUser(firstName, lastName, email, username, password, 'athlete')
    
    /*try{ 
        const rows = await db.query(`INSERT INTO developers (Name, Email) VALUES ('${req.body.Name}', '${req.body.Email}');`);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }*/
});

async function addUser(firstName, lastName, email, username, password, type) {
    const rows = await db.query(`INSERT INTO Users (FirstName, LastName, UserName, Email, Password, Type) VALUES ('${firstName}', '${lastName}', '${username}', '${email}', '${password}', '${type}');`);
    console.log(rows);
}

module.exports = router;