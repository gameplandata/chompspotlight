const express = require('express');
const router = express.Router();

// Route: Home
router.get('/', (req, res) => {
    res.json({ message: 'This is the Home Page.' });
});

module.exports = router;
