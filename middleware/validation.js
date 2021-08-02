const joi = require('joi');

const loginUser = joi.object({
    username : joi.string().required().min(5).max(20),
    password : joi.string().required().min(5)
})

const options = {
    abortEarly: false, 
    allowUnknown: true, 
    stripUnknown: true 
};

class validation{
    loginValidate(req,res,next){
        const { error, value } = loginUser.validate(req.body, options);
        if (error) {
            const err_data = error.details.map(x => x.message).join(', ');
            res.json({data : err_data});
        } else {
            req.body = value;
            next();
        }
    }
}

module.exports = new validation();