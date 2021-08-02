const router = require('./moduleExportEx2');
const express = require("express");

const app = express();
app.use('/', router);
app.listen(5000);