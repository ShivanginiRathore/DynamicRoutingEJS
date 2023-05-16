const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'root@123',
    port: '3001'
});

module.exports = pool.promise();