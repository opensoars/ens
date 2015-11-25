/**
 * Function ensure module.
 * @module fun
 * @param {any} x - Gets checks for type function
 * @return {array} - X if x is a function else an anonymous function
 * @example
 * ens.fun(function test() {}) // function test() {}
 * ens.fun({})                 // function () {}
 */
module.exports = function fun(x) {
  return typeof x === 'function' ? x : function () {};
};
 