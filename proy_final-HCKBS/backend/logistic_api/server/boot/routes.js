'use strict';

module.exports = function (app) {
    let router = app.loopback.Router();
    router.get('/api/lg01s', function (req, res) {
        res.send('SERVIDOR API LOGISTICS --  FUERA DE SERVICIO // LOGISTICS API SERVER -- OUT OF SERVICE');
    });
    router.post('/api/Users', function (req, res) {
        res.send('SERVIDOR API LOGISTICS --  FUERA DE SERVICIO // LOGISTICS API SERVER -- OUT OF SERVICE');
    });
    app.use(router);
};
