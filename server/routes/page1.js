const express = require('express');
const db = require('../database');

const router = express.Router();

// Route: Page 1 
router.get('/', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;