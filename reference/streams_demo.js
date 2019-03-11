const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const stream = fs.createReadStream('../public/index.html');
    stream.pipe(res);
});
server.listen(8000);