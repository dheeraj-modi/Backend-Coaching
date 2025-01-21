const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", function(req, res){
    res.send("hello world");
});

app.get("/greet/:name", function(req, res){
    res.send("hello " + req.params.name);
});

app.post("/echo", function(req, res){
    const {name, message} = req.body;
    res.send("Hi "+name + " your message: "+ message);
});
app.listen(port);