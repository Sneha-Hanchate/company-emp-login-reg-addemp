var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_employee'
})

module.exports = connection;