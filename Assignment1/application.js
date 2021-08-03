const http = require('http');
const express = require('express')
const App = express();

let people = { people : [{ name : "Jyoti"}]}

App.get("/people",function(req,res){
    res.json(people)
    res.end();
})

App.post("/people", function(req,res){
    console.log(req.body)
    res.json(people)
    res.end();
})
App.listen(3000)