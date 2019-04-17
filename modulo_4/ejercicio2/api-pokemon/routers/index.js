"use strict";

const pokemonRouter = require("./pokemon-routers");
const proxyRouter = require("./proxy-router");
const testRouter = require("./tests-routers");

/**
 * It's common to define an index file exporting all the things in the same folder
 * For example, we are exporting all declared routers
 */
module.exports = {
  pokemonRouter,
  proxyRouter,
  testRouter
};
