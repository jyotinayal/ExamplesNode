const express = require('express');
const path = require('path');
const app = express();

app.set(express.static(path.join(__dirname,'views')));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')))
app.use('/greeting',(req,res) => {
  
    let locals = {
        firstname: 'jyoti',
        lastname:  'nayal',
        title:     'Pug template'
    };
    res.render('pugEx',locals);
})
app.listen(5000);