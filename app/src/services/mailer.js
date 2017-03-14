var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://robsdudeson%40gmail.com:ulxaezwkubmycqep@smtp.gmail.com');

module.exports.send = function (mailOpts) {
    // send mail with defined transport object
    transporter.sendMail(mailOpts, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};
