const express = require('express');
const app = express();
const cron = require('node-cron');
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    //host: 'smtp.ethereal.email',
    host :'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'jyotinayal1608@gmail.com',
        pass: 'nceqxjxdwpklwrfp'
    }
});

function sendEmail(message){
    //sending the email
    transporter.sendMail({
        from: '"Jyoti" <jyotinayal1608@gmail.com>',
        to: '"Manish" <manishnayal2000@gmail.com>',
        subject: 'Scheduled Email',
        text: message
    })
        .then(_ => {console.log("Email sent on " + new Date())})
        .catch(error => {console.log(error)});
}

sendEmail("Hey there, this email was sent to you automatically but only once");
// cron.schedule('*/10 * * * *',() => { sendEmail("Hey there, this email was sent to you automatically after every 10min")});
//cron.schedule('* * * * *', sendEmail("Hey there, this email was sent to you automatically in every 1min"));


app.listen(3000, () => {console.log("Server started at port 3000")});
