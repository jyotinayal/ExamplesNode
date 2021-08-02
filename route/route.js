const { Router } = require('express');
const express = require('express');
const route = express.Router();
const controllerApp = require('../controller/controllerApp')
const validateUser = require('../middleware/validation')
route.get('/register', (req,res) => { res.render('register')});
route.post('/register', controllerApp.register);
route.get('/login',(req,res)=>{res.render('login')});
route.post('/login',validateUser.loginValidate,controllerApp.login);
route.get('/update',(req,res)=>{res.render('empupdate')});
route.post('/update',controllerApp.empupdate);
route.get('/delete',(req,res)=>{res.render('empdelete')});
route.post('/delete',controllerApp.empdelete);
route.post('/home',(req,res)=>{ res.write("<h1>Home page</h1>")})
route.use('/',(req,res) => {
    res.status(404).write("<h1>404 Page Not Found</h1>")
})

module.exports = route;