const mongoose = require('mongoose');

require('dotenv').config();
const DB_NAME = process.env.DB_NAME;
mongoose.connect(DB_NAME,{
    userNewUrlParser : true,
    useInifiedTopology : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify : false
})

var emp = new mongoose.Schema({
    name : {type: String},
    username : {type: String},
    password : {type:String}
})
 
module.exports = mongoose.model("employee",emp);