// filepath: /server/db.js
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});


const db = connection.promise();

module.exports = db;
