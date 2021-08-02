const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
const route = require('./route/route')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyparser.urlencoded());
app.set(express.static(path.join(__dirname,'public')));
app.set(express.static(path.join(__dirname,'views')));
app.set('view engine','pug');
app.use('/',route);
app.listen(PORT);