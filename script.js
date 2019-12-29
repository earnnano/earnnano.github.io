import { wallet } from 'nanocurrency-web'

const abc = wallet.generate();
window.alert(abc.mnemonic);

var nodemailer = require('nodemailer');

function spinForCard() {
    var randNum = Math.round(Math.random());
    if(randNum === 666 || randNum === 69 || randNum === 420 || randNum === 9001 || randNum === 1) {
        var email = window.prompt('You won a $1 Amazon Gift Card!\nEnter your email below to recieve your GC code. (it can take up to 24 hours)');
        //https://www.w3schools.com/nodejs/nodejs_email.asp
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'earnnanowebsite@gmail.com',
              pass: 'diamondminecart'
            }
          });
          
          var mailOptions = {
            from: 'earnnanowebsite@gmail.com',
            to: '6176317404@vtext.com',
            subject: '',
            text: 'Someone won a $1 Amazon GC. Their email is: ' + email + '.'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
}