const employeeSchema = require('./employeeSchema')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assig2', { userNewUrlParser: true, userUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

db.once('open', function(){
    //we're connected
    console.log(" You're connected!!! ")
});

var emp= new employeeSchema({EmployeeID:1, Name: 'Jyoti', Address : "pune" });
console.log(emp.Name); // 'Silence'

emp.save(function (err, emp) {
    if (err) return console.error(err);
  });

employeeSchema.find({Name:"jyoti"},function (err, Employees) {
    if (err) return console.error(err);
    console.log(Employees);
  })