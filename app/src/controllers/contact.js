var pug = require('pug');
var validator = require('validator');

var mailer = require('../services/mailer.js');

module.exports.set = function (router, pageHelper) {
    router.get("/contact", function (req, res) {
        var layout = pageHelper.templatesPath + 'layout.pug';
        var page = pageHelper.defaultPage();
        page.body = pageHelper.contentPath + 'contact.pug';
        page.navOpts = pageHelper.createNavOpts(null, null, true);

        res.render(layout, {page: page, templateRender: pug.renderFile});
    });

    router.post("/contact", function (req, res) {
        if (validator.isNumeric(req.body.human) &&
            req.body.human == 5 &&
            validator.isEmail(req.body.email)
        ) {

            var nameEscaped = validator.escape(req.body.name);
            var emailNormalizd = validator.normalizeEmail(req.body.email, {lowercase: true});
            var messageEscaped = validator.escape(req.body.message);

            //TODO: should display result to user on contact.pug
            // setup e-mail data with unicode symbols
            var mailOptions = {
                from: '"no-reply" <no-reply@robsdudeson.com>', // sender address
                to: 'robsdudeson@gmail.com', // list of receivers
                subject: nameEscaped + ' - Contact from www.robsdudeson.com', // Subject line
                text: 'Name: ' + nameEscaped + '\n' +
                'Email: ' + emailNormalizd + '\n' +
                'Message:\n' + messageEscaped
            };
            mailer.send(mailOptions);
        }
        else {
            console.log('didn\'t send mail');
        }

        res.redirect('/contact');
    });
};