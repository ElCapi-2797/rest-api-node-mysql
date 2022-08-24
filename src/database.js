const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'localhost-api',
    user: 'root',
    password : 'root123$',
    database: 'company'
});

mysqlConnection.connect( function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;