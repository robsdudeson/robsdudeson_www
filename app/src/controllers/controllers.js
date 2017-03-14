var pug = require('pug');
var bodyParser = require('body-parser');

var errors = require('./errors.js');
var index = require('./index.js');
var contact = require('./contact.js');
var about = require('./about.js');

module.exports.set = function (app, express, router, pageHelper) {

    router.use(function (req, res, next) {
        console.log("/" + req.method);
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    index.set(router, pageHelper);
    about.set(router, pageHelper);
    contact.set(router, pageHelper);
    errors.set(app, router, pageHelper);
    app.use("/", router);

    app.use("*", function (req, res) {
        res.redirect('/404');
    });
};