const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const myserver = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type':'text/html'});
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world</h1>");
    res.end();
});

myserver.listen(port, hostname, ()=> {
    console.log(`Your server is successfully running on http://${hostname}:${port}`);
});
