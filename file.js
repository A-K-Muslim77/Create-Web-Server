const http = require('http')

const fs = require('fs')

const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        fs.readFile('index.html', (err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type': 'text/plain'})
                res.end("Error loading html file")
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'})
                res.end(data)
            }
        })
    }
})
server.listen(5050,()=>{
    console.log("Server is running");
    
})