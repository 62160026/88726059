const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root',
    password : '', 
    database : 'realtimechat' 
}).promise();
module.exports = dbConnection;