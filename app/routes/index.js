'use strict';
// var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function(app, upload) {
    // var clickHandler = new ClickHandler();
    app.post('/', upload.single('myFile'), function(req, res, next) {
        console.log('getting upload...');
        var retObj = {
            'size': 0
        };
        if (req.file !== undefined) {
            console.log(req.file.size);
            retObj.size = req.file.size;
            res.send(retObj).end();
        } else {
            res.send('Error retreiving file!').end();
        }
    })
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    app.route('/test')
        .get(function(req, res) {
            res.send('This is a test of the clementinejs system.<br>  This is only a test.');
        });

};
