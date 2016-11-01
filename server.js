'use strict';

var express = require('express');
var test = require('assert');
var routes = require('./app/routes/index.js');
var multer = require('multer')
var storage = multer.memoryStorage()
var maxSize = 1000000;
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
})
var app = express();

var port = process.env.PORT;
// if not set use 3000 as the default
if (port === undefined) {
    port = 3000;
}

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app, upload);

app.use(function(err, req, res, next) {
    console.log(err.code);
    var retCode = 'Something broke!';
    if (err.code === 'LIMIT_FILE_SIZE') {
        retCode = 'File too large: \n max size is ' + maxSize + ' bytes.';
    }
    res.status(500).send(retCode);
});

app.listen(port, function() {
    console.log('Node.js listening on port: ' + port);
});
