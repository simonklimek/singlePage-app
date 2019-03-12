const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });
// set up express to server static files from directory called public -> important 
app.use(express.static('../public'));


// Basic CRUD examples

app.get('/users', (req,res) => {
    // get all users
    const users = [{id: 1, name: 'Simon'}, {id: 2, name: 'Radka'}]
    res.send(users)
})

app.get('/users/:id', (req,res) => {
    // get the user with specified id
})

app.post('/users', (req,res) => {
    // create new user
})

app.put('/users/:id', (req,res) => {
    // update the user with specified id
})

app.delete('/users/:id', (req, res) => {
    // delete the user with specified id
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000');
});