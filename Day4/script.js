const express = require('express');
 const app = express();
 const port = 3000; 
 app.get('/', (req, res) => {
 res.send('Hello, World! from express server'); 
 });
 
 app.use(express.json());
app.get("/user", (req, res) => {
    const user = req.query.user
    res.send("user is " + user)
})

app.post("/user", (req, res) => {
    res.send("user and password are " + req.body.user + " and " + req.body.password)
})
 app.get("*", (req, res) => {
    res.send("404 Not Found");
 })
 app.listen(port, () => {
 console.log(`Server is running on <http://localhost:${port}>`);
 });