const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'helloworld2025', 
    database: 'InstrumentosDB'
});

module.exports = pool.promise();