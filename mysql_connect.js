const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "password",
    database: "nodelogin",  // mysql_alfa
    port: 8889
  });

