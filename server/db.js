// filepath: /server/db.js
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinergify_investments'
});


const db = connection.promise();

module.exports = db;