const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv").config();

const server = http.createServer(function(request,response) {
    fs.readFile("./index.html" , function(err,content) {
      if(err) {
          console.log("Error==>",err);
      } else {
          response.writeHead(200,{ "Content-Type" : "text/html" });
          response.write(content);
          response.end();
      }
    })
})
console.log("Server is listening on port ",process.env.port);
server.listen(process.env.port);