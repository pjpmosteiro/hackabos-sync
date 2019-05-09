const express = require('express');
const logger = require('morgan');
const tracks = require('./app/routes/tracks');
const users = require('./app/routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./app/config/database'); //database config
var jwt = require('jsonwebtoken');
const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.json({ "PRNET TECX": "Logistics API V1.0.2 SRV1 || Sistema OK, I/O OK || api.logistics.redp.icu / backend.int.redp.icu" });
});
// public route
app.use('/users', users);
// private route
app.use('/tracks', validateUser, tracks);
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            // add us id to request
            req.body.userId = decoded.id;
            next();
        }
    });

}
// catch and handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "No encontrado" });
    else
        res.status(500).json({ message: "Oops, seem a fail by our side. Sorry for the inconveniences :( " });
});
app.listen(3000, function () {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> Node armado (y peligroso) en el puerto 3000');
});