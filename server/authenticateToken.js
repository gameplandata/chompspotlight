const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid or has expired' });
        }

        req.user = user; 
        next(); 
    });
}

module.exports = authenticateToken;
