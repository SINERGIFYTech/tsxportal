// filepath: /server/db.js
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    // user: 'investor',
    // password: 's3@4bGe9%MRNPap5iXQ#9F',
    password: '',
    database: 'sinergify_investments'
});


const db = connection.promise();

module.exports = db;
