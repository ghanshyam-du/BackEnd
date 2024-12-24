const express = require('express');
const app = express();

app.get('/home',(req,res) =>{
    res.send("hi this is home page.");
})

app.get('/profile',(req,res)=>{
    res.send("his this is profile page");
})

app.listen(4000);