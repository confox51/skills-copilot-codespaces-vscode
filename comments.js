// create web server
// create a route that responds to a GET request
// route should return a JSON object
// object should have a key "message" with the value "Hello, World!"

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Hello, World!' }));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Not Found' }));
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});