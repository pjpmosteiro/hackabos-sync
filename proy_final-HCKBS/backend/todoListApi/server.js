var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://lex:Mosteiro1@cluster0-3qi3i.gcp.mongodb.net/test?retryWrites=true');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + '| mmm, no, esto no existe....' })
});

app.listen(port);


console.log('OK, servidor RESTApi escuchando en el puerto ' + port);
