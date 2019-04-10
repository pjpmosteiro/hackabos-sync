'use strict';

module.exports = function (app) {
    let router = app.loopback.Router();
    router.get('/ping', function (req, res) {
        res.send('Serividor API REST OK, sistema listo! :)');
    });
    app.use(router);
};
