const express = require('express');
const db = require('../database');

const router = express.Router();

// The following are just rough examples of how fetching and inserting rows into the database may look like
// In actual implementation make sure to implement thorough error handling
// To run these examples make sure database is set to 'devs' in the .env file

// Get method to query for all rows in developers table
router.get('/', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM developers');
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

//Post method to send command to insert row into database
router.post('/', async (req, res) => {
    try{ 
        const rows = await db.query(`INSERT INTO developers (Name, Email) VALUES ('${req.body.Name}', '${req.body.Email}');`);
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;