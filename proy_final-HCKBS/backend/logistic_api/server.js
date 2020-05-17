
const express = require('express');
const logger = require('morgan');
const tracks = require('./app/routes/tracks');
const users = require('./app/routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./app/config/database');
var jwt = require('jsonwebtoken');
const app = express();
//Configuracion de seguridad de jwt
app.set('secretKey', 'nodeRestApi');

// Conexion a Mongo
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Header de entrada
app.get('/', function (req, res) {
    res.json({ "Logistics API V1.0.2 SRV1 ||": " Sistema OK, I/O OK || api.logistics.redp.icu / backend.int.redp.icu" });
});

// Router publico para login
app.use('/users', users);
// Router privado de acceso restringido
app.use('/tracks', validateUser, tracks);
//Evitamos que pidan favicon
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

//Validador de usuarios
function validateUser(req, res, next) {
    jwt.verify(req.headers['Authorization'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.sendStatus(403),
                console.log(err);
        } else {
            //Añadir id de usuario ¡
            req.body.userId = decoded.id;
            next();
        }
    });

}
//Pescamos y manejamos 404, express no sabe.
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// Control de errores
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found... Maybe CAPS? ;) ---- 404 ERROR" });
    else
        res.status(500).json({ message: "Oops, seem a fail by our side. Sorry for the inconveniences :( ---- 500 ERROR" });
});


//Si se llega hasta aqui, todo OK, node esta cargado :)
app.listen(3000, function () {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> Node armado (y peligroso) en el puerto 3000<<<<<<<<<<<<<<<<<<<<<<<<');
=======
const express = require('express');
const logger = require('morgan');
const tracks = require('./app/routes/tracks');
const users = require('./app/routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./app/config/database');
var jwt = require('jsonwebtoken');
const app = express();
//Configuracion de seguridad de jwt
app.set('ulkit6i64jr76r7i7rj', 'nodeRestApi');

// Conexion a Mongo
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Header de entrada
app.get('/', function (req, res) {
    res.json({ "Logistics API V1.0.2 SRV1 ||": " Sistema OK, I/O OK || api.logistics.redp.icu / backend.int.redp.icu" });
});

// Router publico para login
app.use('/users', users);
// Router privado de acceso restringido
app.use('/tracks', validateUser, tracks);
//Evitamos que pidan favicon
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

//Validador de usuarios
function validateUser(req, res, next) {
    jwt.verify(req.headers['Authorization'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: "Auth required, please, try again", data: null });
        } else {
            //Añadir id de usuario ¡
            req.body.userId = decoded.id;
            next();
        }
    });

}
//Pescamos y manejamos 404, express no sabe.
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// Control de errores
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found... Maybe CAPS? ;) ---- 404 ERROR" });
    else
        res.status(500).json({ message: "Oops, seem a fail by our side. Sorry for the inconveniences :( ---- 500 ERROR" });
});


//Si se llega hasta aqui, todo OK, node esta cargado :)
app.listen(3000, function () {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> Node armado (y peligroso) en el puerto 3000');
>>>>>>> 538bed00129fb4c4f2fdeefc533507a6bf8c6767
});
