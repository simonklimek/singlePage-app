const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql');

// setting up the database 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db"
});

const app = express();
app.use(morgan('tiny'));

// db.connect((err)=> {
//     if (err){
//         throw err;
//     }
//     console.log("Connected to MYSQL.....!");
//     db.query("SELECT * FROM users", (err, result, fields)=> {
//       if (err){
//           throw err;
//         }
//     // console.log(JSON.stringify(result));
//     console.log(result);
//     });
//   });



// db.connect();

// db.query("SELECT * FROM users", (err, result, fields)=> {
//     if (err){
//         throw err;
//     }
//     console.log(JSON.stringify(result));
// });

// db.end();

db.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
    });

app.get("/",function(req,res){
    db.query('SELECT * FROM users LIMIT 2', function(err, result, fields) {
    db.end();
      if (!err)
        console.log('The solution is: ', result);
      else
        console.log('Error while performing Query.');
      });
    });
    
app.listen(3000);

// routes
// app.get("/", (req,res)=>{
//     console.log("Responding to root route.....")
//     res.send("HI FROM ROOT DIR")
// })


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



// // json example
// app.get("/users", (req,res)=>{
//     const user1 = {name: "Simon", occupation: "WebDev", age: 27}
//     const user2 = {name: "Claire", occupation: "Designer", age: 22}
//     res.json([user1,user2])
// })

// app.listen(3003, ()=>{
//     console.log("Server is up and listening on 3003.....");
// });