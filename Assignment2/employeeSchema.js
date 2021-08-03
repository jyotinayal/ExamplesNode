var mongoose=require('mongoose');

var EmployeeSchema = new mongoose.Schema({
	EmployeeId:Number,
	Name:String,
	Address:String
});

module.exports = mongoose.model(
	'employee', EmployeeSchema, 'Employees');
