'use strict';

require('dotenv').config();
const webServer = require('./webserver');
const httpServerConfig = require('./config/http-server-config');
const mysqlPool = require('./databases/mysql-pool');
const mongoPool = require('./databases/mongo-pool');
// const mysqlPool = require('./app/domain/builders/mysql-pool-builder');
// const mongoPool = require('./app/domain/builders/mongo-pool-builder');

/**
 * Initialize dependencies
 * */
(async function initApp() {
  try {
    // await mysqlPool.connect();
    // await mongoPool.connect();
    await webServer.listen(httpServerConfig.port);
    console.log(`Escuchando en: ${httpServerConfig.port}`);
  } catch (e) {
    await webServer.close();
    console.error(e);
    process.exit(1);
  }
}());