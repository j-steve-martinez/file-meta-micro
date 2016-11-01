'use strict';

var express = require('express');
var mongo = require('mongodb');
var test = require('assert');
var routes = require('./app/routes/index.js');
var multer = require('multer')
var upload = multer({
    dest: 'size/'
})
var app = express();

// get the port and url from the environment
var port = process.env.PORT;
var url = process.env.template;

// if not set use 3000 as the default
if (port === undefined) {
    port = 3000;
}

app.get('/', function(req, res) {
    // res.render('/public/index.html');
    res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/', upload.single('myFile'), function(req, res, next) {
    console.log('submitted form to server...');
    console.log(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(204).end();
})


app.listen(port, function() {
    console.log('Node.js listening on port: ' + port);
});
