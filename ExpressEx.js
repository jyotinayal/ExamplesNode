const express = require('express');
const app = express();

// app.use('/',(req,res) => {
//     res.end("<h1>Default</h1>")
// })
app.use('/nacktschnecke',(req,res) => {
    res.write("<h1>nacktschnecke</h1> ")
})
app.use((req,res) => {
    res.end("<h1>404 error not found</h1>")
})
app.listen(3000);