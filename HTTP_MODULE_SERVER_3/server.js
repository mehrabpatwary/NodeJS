const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const myserver = http.createServer((req, res) => {
    res.end("<h1>Hi im working</h1>");
});

myserver.listen(port, hostname, ()=> {
    console.log(`Your server is successfully running on http://${hostname}:${port}`);
})