const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/sandwiches",(req, res)=>{
    const sandwiches = [
        {
            "_id":1,
            "name":"Philly Cheesesteak",
            "bread":"white",
            "toppings":["cheese","beef","peppers"],
            "hot": "true",
            "price": "$7",
            "img": "images/philly.jpg"
        },
        {
            "_id":2,
            "name":"Meatball Sub",
            "bread":"white",
            "toppings":["cheese","meatballs","marinara sauce"],
            "hot": "true",
            "price": "$7",
            "img": "images/meatball.jpg"
        },
        {
            "_id":3,
            "name":"Buffalo Chicken",
            "bread":"white",
            "toppings":["cheese","chicken","buffalo sauce"],
            "hot": "true",
            "price": "$7",
            "img": "images/buffalo.jpg"
        },
        {
            "id": 4,
            "name": "Cuban Sandwich",
            "bread": "white",
            "toppings":["ham", "cheese"],
            "hot": "true",
            "price": "7$",
            "img": "images/cuban.jpg"
        },
        {
            "id": 5,
            "name": "Italian",
            "bread": "white",
            "toppings":["salami", "pepperoni", "cheese"],
            "hot": "false",
            "price": "$7",
            "img": "images/italian.jpg"
        },
        {
            "id": 6,
            "name": "Turkey",
            "bread": "white",
            "toppings":["turkey", "cheese", "mustard"],
            "hot": "false",
            "price": "$7",
            "img": "images/turkey.jpg"
        },
        {
            "id": 7,
            "name": "Ham",
            "bread": "white",
            "toppings":["ham", "cheese", "mayo"],
            "hot": "false", 
            "price": "$7",
            "img": "images/ham.jpg"
        },
        {
            "id": 8,
            "name": "Chicken Salad",
            "bread": "white",
            "toppings":["chicken salad", "mayo"],
            "hot": "false",
            "price": "$7",
            "img": "images/chickensalad.jfif"
        }
    ]; 
    res.send(sandwiches);
});

app.listen(3000, ()=>{
    console.log("done");
});