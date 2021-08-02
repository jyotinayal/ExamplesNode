const express = require('express');
const app = express();
const cron = require('node-cron');

cron.schedule('* * * * *', () => {console.log("Task is running every minute " + new Date())});
app.listen(3000, () => {console.log("Server started at port 3000")});
