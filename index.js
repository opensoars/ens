/**
 * @module ens
 */

var ens = {};

/*
['arr', 'str', 'num', 'boo', 'obj', 'fun'].forEach(function (lib_name) {
  ens[lib_name] = require('./lib/' + lib_name);
});

module.exports = ens;
*/

ens.arr = require('./lib/arr');
ens.str = require('./lib/str');

ens.num = function (x) {
  return typeof x === 'number' ? x : 1;
};

ens.boo = function (x) {
  return typeof x === 'boolean' ? x : true;
};

ens.obj = function (x) {
  return (typeof x === 'object' && !(x instanceof Array)) ? x : {};
};

ens.fun = function (x) {
  return typeof x === 'function' ? x : function () {};
};

module.exports = ens;