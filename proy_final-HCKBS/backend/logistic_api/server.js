const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.json({
        "PRNET TECX": "Logistics API V1.0.1 SRV1 || Sistema OK, I/O OK || api.logistics.redp.icu / backend.int.redp.icu"
    });
});
app.listen(3000, function () { console.log('Node escuchando en puerto 3000 || READY'); });