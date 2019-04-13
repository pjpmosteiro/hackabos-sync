'use strict';

let loopback = require('loopback');
let boot = require('loopback-boot');

let app = (module.exports = loopback());

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    let baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

app.use(
  loopback.token({
    model: app.models.accessToken,
    currentUserLiteral: 'me',
    bearerTokenBase64Encoded: false, // here
  })
);

//TODO: insertar middleware loopback-jwt

const loopbackJWT = require("loopback-jwt-advanced");
const auth = loopbackJWT(app, {
  verify: function (req) {
    let jwt = req.user;
    if ("some custom verification fails") { throw new Error("Token invalid."); }
  },
  beforeCreate: function (userObj, req) {
    let jwt = req.user;
    // add custom fields to the user object within the database
    userObj.emailVerified = jwt.email_verified;
    userObj.username = jwt.nickname;
    userObj.remoteId = jwt.sub;
  }
});

app.use("/<path>", auth.authenticated);

app.use(function (err, req, res, next) {
  // beautify error for loopback.errorHandler()
  if (err.name === "UnauthorizedError") { err = { status: 401, message: " Missing or invalid token" }; }
  next(err);
});


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

