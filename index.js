const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<b> Hello!!! This is server from port 3000. </b>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running");
});

