/*
 * @module ens
 */

var ens = {};

['arr', 'str', 'num', 'boo', 'obj', 'fun'].forEach(function (lib_name) {
  ens[lib_name] = require('./lib/' + lib_name);
});

module.exports = ens;

