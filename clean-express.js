// /api/posts
// POST: /api/post/ {tile, body, img}
// Register: POST /api/users/ {name, email, password}
// Login: POST /api/logins
// https://github.com/azat-co/practicalnode/blob/master/chapter6/chapter6.md

const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "password",
    database: "nodelogin",  // mysql_alfa
    port: 8889
  });
  
const app = express();


// Body parser auth session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Test login page /login/login.html
app.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname + '/login/login.html'));
});

// Our POST request
app.post('/auth', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		pool.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

// SESSION

app.get('/home', function(req, res) {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

// POSTS

// function handle_posts(req,res) {
//     pool.query("SELECT * FROM posts",function(err,rows){
//      if(err) {
//          return res.json({'error': true, 'message': 'Error occurred'+err});
//      }
//              res.json(rows);
//     });
// }

// RETREIVE POSTS FROM DB
pool.query("SELECT * FROM posts", function(err, results) {
    if (err) throw err
    articles = results;
});


// USERS
pool.query("SELECT * FROM accounts", function(err, results) {
    if (err) throw err
    usernames = results;
});


// POSTS

// app.get("/handle_posts",function(req,res){
//     handle_posts(req,res);
// });

app.get('/', function(req, res) {
    // let articles = [
    //     {
    //         id:1,
    //         title:'Article title',
    //         author:'Simon Klimek',
    //         body:'This is the blog article one'
    //     },
    //     {
    //         id:2,
    //         title:'Article title two',
    //         author:'Arni Klimek',
    //         body:'This is the blog article two'
    //     },
    //     {
    //         id:3,
    //         title:'Article title three',
    //         author:'Tobias Klimek',
    //         body:'This is the blog article three'
    //     }
    // ];
    
    
    res.render('index', {
        title: "POSTS",
        articles: articles,
        usernames: usernames
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

// Error handling
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error', {
    title: "404 NOT FOUND :("
});

});

app.listen(3000,function() {
    console.log('server started');
})


// pool.query('SELECT * FROM posts', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The post is: ', results[0].title);
//     console.log(JSON.stringify(results));
//   });




// var url = 'simonsnetwork.co.uk';
// module.exports.endPoint = url; // or name of funcions  // single function or an object!
// module.exports = url; 

// jshint