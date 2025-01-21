const http = require('http');

const server = http.createServer(function (req, res){
    // res.end("Hello, world!");

    if(req.url=="/"){
        res.end("hello index page")
    }
    if(req.url=="/about")
    {
        res.end("about page")
    }
});

server.listen(3000,()=>{
    console.log("server listening on port 3000");
});