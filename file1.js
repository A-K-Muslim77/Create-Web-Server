const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/api"){
        let user = {
            name : "Muslim",
            age : 25,
            profession : "Developer",
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
   
        res.end(JSON.stringify(user));
    }
});

server.listen(5050, () => {
    console.log("Server is running");
});

