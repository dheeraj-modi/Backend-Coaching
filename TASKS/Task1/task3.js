const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", function(req, res){
    const users = req.query.user;
    res.send(users);
});

app.post("/users", function(req, res){
    const {name,email,age} = req.body;
    res.send(`user created successfully, name is ${name} and email is ${email} and age is ${age}`);
});

app.listen(port);