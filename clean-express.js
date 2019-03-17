// /api/posts
// POST: /api/post/ {tile, body, img}
// Register: POST /api/users/ {name, email, password}
// Login: POST /api/logins


const express = require('express');
const path = require('path');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "password",
    database: "mysql_alfa",
    port: 8889
  });
  
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    let articles = [
        {
            id:1,
            title:'Article title',
            author:'Simon Klimek',
            body:'This is the blog article one'
        },
        {
            id:2,
            title:'Article title two',
            author:'Arni Klimek',
            body:'This is the blog article two'
        },
        {
            id:3,
            title:'Article title three',
            author:'Tobias Klimek',
            body:'This is the blog article three'
        }
    ];
    
    
    res.render('index', {
        title: "POSTS",
        articles: articles
    });
});

app.get('/articles/add', function(req, res) {
    res.render('add_article', {
        title: "Add Articles"
    });
});

app.get('/register', function(req, res) {
    res.render('register', {
    });
});


app.get('/post', function(req, res) {
    res.render('add_article', {
        title: "POST AN ARTICLE"
    });
});

app.listen(3000,function() {
    console.log('server started');
})


pool.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    console.log('The post is: ', results[0].title);
    console.log(JSON.stringify(results));
  });




// var url = 'simonsnetwork.co.uk';
// module.exports.endPoint = url; // or name of funcions