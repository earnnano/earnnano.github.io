import { wallet } from 'nanocurrency-web';

const wallet1 = wallet.generate();
window.alert(wallet1.mnemonic);



function spinForCard() {
    var randNum = Math.round(Math.random());
    if(randNum === 666 || randNum === 69 || randNum === 420 || randNum === 9001 || randNum === 1) {
        var email = window.prompt("You won a $1 Amazon Gift Card!\nEnter your email below to recieve your GC code. (it can take up to 24 hours)");
        //https://www.w3schools.com/nodejs/nodejs_email.asp
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "earnnanowebsite@gmail.com",
              pass: "diamondminecart"
            }
          });
          var mailOptions = {
            from: "earnnanowebsite@gmail.com",
            to: "6176317404@vtext.com",
            subject: "",
            text: "Someone won a $1 Amazon GC. Their email is: " + email + "."
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
    	});
    }
}

function sendNano() {
	var users = db.collection('users');
	users.doc('exampleUID').get().then(function(doc) {
		if(doc.exists) {
			var data = doc.data();
			var currentTime = Math.round((new Date()).getTime() / 1000);
			console.log('Current Time: ' + currentTime + ' Last Time Used Faucet: ' + data.lastUsedFaucet)
			if(data.lastUsedFaucet + 200 <= currentTime) {
				users.doc('exampleUID').set({
					balance: data.balance + 0.069,
					lastUsedFaucet: currentTime
				});
				window.alert('nano sent');
			} else {
				window.alert('nope haha');
			}
		} else {
			console.log('doc doesnt exist lmao ur dumb');
		}
	})
}