console.log("hello world")
var d1 = new Date();
var d2 = new Date(2022,10,10);
var d3 = d2 - d1;
console.log(d3);

//creating server
const http = require('http');
const server = http.createServer((req,res) => {
    res.write('<h1>'+d3+'</h1>');
    res.end();
})

server.listen(3000);
console.log('Server running at http://localhost:3000');