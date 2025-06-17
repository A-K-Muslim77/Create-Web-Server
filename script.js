const http = require("http")

const server = http.createServer((req , res)=>{
    const url = req.url

    if(url === "/"){
        res.writeHead(200 , {'Content-type' : 'text/html'})
        res.write("<b> This is home page. </b>")
        res.end()
    }
    else if(url === "/about"){
        res.writeHead(200 , {'Content-type' : 'text/html'})
        res.write("<b> This is about page. </b>")
        res.end()
    }
    else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("404 Page Not Found");
}
})

server.listen(3030,()=>{
    console.log("Server is running");
    
})