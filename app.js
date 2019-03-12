const express = require('express');
// const morgan = require('morgan')
const mysql = require('mysql');

// setting up the database 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mysql_alfa",
  port: 8889
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
        console.log("Database is connected ... !!");    
    } else {
        console.log("Error connecting database ... !!");    
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
        console.log('Error while performing Query.');
      }});
    });
    
app.get("/u",(req,res) => {
  db.query("SELECT name FROM users", (err, result)=> {
    if (err){
        console.log(`custom error type: ${err}`);
      } else {
  console.log(JSON.stringify(result));
  console.log('------------------------------');
  // console.log(result);
  res.json([result]);
  db.end();
  }});
  });

// json example
app.get("/users", (req,res)=>{
  const user1 = {name: "Simon", occupation: "WebDev", age: 27}
  const user2 = {name: "Claire", occupation: "Designer", age: 22}
  res.json([user1,user2])
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




