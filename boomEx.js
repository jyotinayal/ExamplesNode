const express = require('express');
const app = express();
const Boom = require('boom')
const router = express.Router();

router.get('/', (req,res) => {
  res.send('OK'); // Sends HTTP status code 200 back to browser
});

//handling invalid request with boom
router.all('*',(req,res) => {
  res.json(Boom.notFound('Invalid Request')); // this will set the status to 404
});

app.use('/',router);

app.listen(process.env.port || 3000);