const express = require('express');
const router = express.Router();
const {contact, about, name, education, auth, validation} = require('./controller/moduleExportCont'); 
router.use('/contact',auth,contact);

router.use('/about',validation, about);

router.use("/name",validation,name);

router.use("/education",auth,education);

router.use((req,res)=> {
    res.status(404).write("<h1>404 Page Not Found</h1>")
})
module.exports = router;
