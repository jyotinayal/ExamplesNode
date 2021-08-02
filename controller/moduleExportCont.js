const { nextTick } = require("process");

module.exports.contact = (req,res) => {
    res.end("<h1>Contact me 9999999999</h1>")
}

module.exports.name = (req,res) => {
    res.end("<h1>My name is jyoti nayal</h1>");
}

module.exports.education = (req,res) => {
    res.end("<h1>I am pursuing MCA from SIOM<h1>");
}

module.exports.about = (req,res) => {
    res.end("<h1>I am Full stack engineer<h1>");
}

module.exports.validation = (req,res,next) => {
    console.log("validation")
    next();
}

module.exports.auth = (req,res,next) => {
    console.log("auth")
    next();
}