const mysql = require('mysql');

 const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "password",
    database: "nodelogin",  // mysql_alfa
    port: 8889
  });

  module.exports = pool;

// Search querry: 
// SELECT * from posts where title like \'%'+ keyword +'%\' order by id desc;



// let usersdb = {};

// usersdb.all = () => {
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM accounts`, (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

// let postsdb = {};

// postsdb.all = () => {
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM posts`, (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

//   module.exports = {usersdb, postsdb};