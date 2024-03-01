const mysql = require('mysql2/promise');
require('dotenv').config()

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE 
  };

// Creates connection pool 
const pool = mysql.createPool(dbConfig);

async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
}

module.exports = {query};