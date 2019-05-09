//Controlador de usuario
const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    create: function (req, res, next) {
        //Contencion de error
        userModel.create({ email: req.body.email, password: req.body.password }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "OK, user added correctly!", data: null });

        });
    },

    authenticate: function (req, res, next) {
        userModel.findOne({ email: req.body.email }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                //VERIFICATION OF JWT AUTH ON REQUEST
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({ status: "success", message: "OK, user found!", data: { user: userInfo, token: token } });
                } else {
                    res.json({ status: "error", message: "Uh oh, incorrect email or password. Please, try again.", data: null });
                }
            }
        });
    },
}