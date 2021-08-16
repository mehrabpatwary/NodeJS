const http = require('http');
const fs = require('fs');
const port = 3000
const hostName = '127.0.0.1'

const server = http.createServer((req, res) => {
    const handleReq = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/') {
        handleReq(200, "./views/index.html");
    }
    else if (req.url === '/about') {
        handleReq(200, "./views/about.html");
    }
    else if (req.url === '/contact') {
        handleReq(200, "./views/contact.html");
    }
    else {
        handleReq(404, "./views/error.html");
    }
});

server.listen(port, hostName, () => {
    console.log(`Successfully running, your server address is http://${hostName}:${port}`);
})
///Command: npm install nodemon