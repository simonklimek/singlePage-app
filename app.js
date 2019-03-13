const express = require('express');
// const morgan = require('morgan')
const mysql = require('mysql');

// setting up the database 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mysql_alfa",//"mysql_alfa",
  port: 8889
  //port: 3306 //8889
});

const app = express();
// app.use(morgan('tiny'));

// db.connect();

// db.query("SELECT * FROM users", (err, result, fields)=> {
//     if (err){
//         throw err;
//     }
//     console.log(JSON.stringify(result));
// });

// db.end();

db.connect((err) => {
    if(!err) {
        console.log("[STATUS] Database is connected ... !!");    
    } else {
        console.log("[STATUS] Error connecting database ... !!");    
    }
    });


// Function that add data to database
function addData() {
  // SQL query
  var sql = "INSERT INTO users (name, email, password) " + " VALUES ('Mark', 'mark@interia.pl', 'pass3')";

  db.query(sql, function (err, result) {
    // Check for errors
    if (err) throw err;

    // Output results
    console.log(result.affectedRows + 'wors updated. ID is ' + result.insertId);
  });
};

// addData();

// Routes

app.get("/",function(req,res){
    db.query('SELECT * FROM users LIMIT 2', function(err, result, fields) {

      if (!err)
        console.log('The solution is: ', result);
      else {
        console.log('[STATUS] Error while performing Query.');
      }});
    });
    
app.get("/u",(req,res) => {
  db.query("SELECT name FROM users", (err, result)=> {
    if (err){
        console.log(`[STATUS] custom error type: ${err}`);
      } else {
  console.log(JSON.stringify(result));
  console.log('------------------------------');
  // console.log(result);
  res.json([result]);
  db.end();
  }});
  });






app.listen(3000);

// app.get("/createdb", (req,res)=>{
//     let sql = "CREATE DATABASE nodemysql";
//     db.query(sql, (err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send("Database created...");
//     });
// });


// app.get("/createposttable", (req,res) => {
//     let sql = "CREATE TABLE posts(id int AUTO_INCREMENT
//         , title VARCHAR(255), body VARCHAR(255) PRIMARY KEY (id)";
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Table post created...');
//     });
// });




