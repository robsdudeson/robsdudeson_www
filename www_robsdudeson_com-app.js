//config
var port = 8000;
var hostname = "localhost";
var templatesPath = __dirname + '/app/templates/';
var sourcePath = __dirname + '/app/src/';
var contentPath = templatesPath + 'content/';
var includesPath = templatesPath + 'includes/';

var express = require('express');
var app = express();
var router = express.Router();

var pageHelper = new require(sourcePath + 'services/PageHelper.js')(templatesPath, contentPath, includesPath);
var controllers = require(sourcePath + 'controllers/controllers.js');

//TODO: this needs moved to it's own controller... but i've not got it working yet...
app.use('/static', express.static(__dirname + '/app/public'));

controllers.set(app, express, router, pageHelper);

app.listen(port, hostname);
console.log('Server up and running at http://' + hostname + ':' + port);