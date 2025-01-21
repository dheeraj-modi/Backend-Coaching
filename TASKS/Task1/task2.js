const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/products", function(req, res){
    const {category,price} = req.query;
    if(category && price)
    {
    res.send(`Products in ${category} with price less than ${price}`);
    }
    else if(category)
    {
        res.send(`Products in ${category}`);
    }
    else if(price)
    {
        res.send(`Products with price less than ${price}`);
    }
    else{
        res.send("All products");
    }
});

app.get("*", function(req, res){
    res.send("404 - Route not found");
});

app.listen(port);