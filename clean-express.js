// /api/posts
// POST: /api/post/ {tile, body, img}
// Register: POST /api/users/ {name, email, password}
// Login: POST /api/logins
// https://github.com/azat-co/practicalnode/blob/master/chapter6/chapter6.md

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./mysql_connect');
  
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

// Handle registration
app.post('/reg', function(req, res) {
    // console.log("req",req.body);
    var today = new Date();
    var usernamel = req.body.usernamelog;
    var passwordl = req.body.passwordlog;
     
    pool.query('INSERT INTO accounts SET ?',[usernamel, passwordl], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
});

// Our POST login request
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

// RETREIVE POSTS FROM DB
pool.query("SELECT * FROM posts", function(err, results) {
    if (err) throw err
    articles = results;
});

// RETREIVE USERS
pool.query("SELECT * FROM accounts", function(err, results) {
    if (err) throw err
    usernames = results;
});

app.get('/', function(req, res) {
    res.render('index', {
        title: "POSTS",
        articles: articles,
        usernames: usernames
    });
});


app.get('/register', function(req, res) {
    res.render('register', {
    });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
// error handler middleware
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



// var url = 'simonsnetwork.co.uk';
// module.exports.endPoint = url; // or name of funcions  // single function or an object!
// module.exports = url; 

// jshint