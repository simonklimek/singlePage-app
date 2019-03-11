const http = require('http');
const path = require('path');
const fs = require('fs');

const web = fs.readFileSync('./public/index.html');

const server = http.createServer((req,res) => {
    // Print the requests 
    console.log(req.url);

    // Response
    
    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'Szymob Klimek', age: 28 }
        ];
        // res.write('<h1>About Nodejs</h1>');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } 
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./public/index.html', (err, file) => {
            if (err) throw err;
            res.end(file);
        });
    }});
    // res.end("Hello World");

    // Enviromental variable depends on server confing
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));