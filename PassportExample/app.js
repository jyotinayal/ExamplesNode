var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
var path = require("path");
  mongoose.connect('mongodb://localhost/MyDatabase',
  { useNewUrlParser: true, useUnifiedTopology: true });  
var app = express();
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,'views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret:"Miss white is my cat",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===================
//     ROUTES
// ===================



app.get("/",function(req, res){
   res.render("home"); 
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

app.get("/register", function(req, res){
    res.render("register");
});

// handeling user sign up
app.post("/register", function(req, res){
    Users=new User({username: req.body.username});
//    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    User.register(Users, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/login");
        });
    });
});

// Login Form
app.get("/login", function(req, res){
    res.render("login");
});

// Login Logic
// middleware
app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
    
});

// Logout
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

// check isLoggedIn
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(5000, function(){
    console.log("app started!!!")
});