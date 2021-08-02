const emp_Data = require('../model/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
class controller {
    async register(req,res,next) {
        const {name, username, password: plainTextPassword} = req.body;
        const password = await bcrypt.hash(plainTextPassword, 10);
        if(await emp_Data.findOne({username}))
        {
            res.json({status : "failed", msg : "Already Username exists"})
        }
        try{
            const user = await emp_Data.create({name,username,password})
        }
        catch(err)
        {
            console.log(err);
        }
        res.json({ status: 'ok' })
    }

    async login(req,res,next){
        const {username,password} = req.body;
        const user = await emp_Data.findOne({username : username});
        if(!user)
        {
            res.json({status : "failed" , msg : "Not a valid user"})
        }
        else{
            if(await bcrypt.compare(password, user.password))
            {
                const token = jwt.sign(
                    {username : username},
                    JWT_SECRET, 
                    {expiresIn : '24h'});
                res.json({status : 'ok' , data : token});
            }
            else{
                res.json({status : "failed" , msg : "Incorrect password"});
            }
        }
    }
    async empupdate(req,res,next) {
        const {username , password, name} = req.body;
        const user = await emp_Data.findOne({username :username})
        if(!user){
            res.json({status : "Username does not exists"});
        }
        else{
            await emp_Data.findOneAndUpdate({username :username}, { password : password, name : name}, function (err,data){
                if(err){
                    res.json({ status : "Not Updated"});
                }
                else{
                    res.json({status : "Updated successfully"});
                }
            })
        }
    }

    async empdelete(req,res,next){
        const username = req.body.username;
        const user = await emp_Data.findOne({username :username})
        if(user)
        {
            await emp_Data.deleteOne({username :username})
            res.json({status : 'ok'})
        }
        else{
            res.json({status : 'Username is not present'})
        }
    }
}
module.exports = new controller();