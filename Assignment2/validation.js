// ...
const express = require('express')
var app = express();
//app.use('/', Routes);

app.post('/test', (req, res, next) => {
  // ...

  Joi.validate(data, schema, (err, value) => {
    const id = Math.ceil(Math.random() * 9999999);

    if (err) {
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
        data: data
      });
    } else {
      res.json({
        status: 'success',
        message: 'User created successfully',
        data: Object.assign({id}, value)
      });
    }
  });
});

// establish http server connection
app.listen(3000, () => { console.log(`App running on port ${3000}`) });