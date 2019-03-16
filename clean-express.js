const express = require('express');
const path = require('path');
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