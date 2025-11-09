const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send("hello world");
});

app.get("/api/cakes",(req, res)=>{
    const cakes = ["cake1", "cake2", "cake3"]; //json
    res.send(cakes);

});

app.listen(3000, ()=>{
    console.log("done");
});