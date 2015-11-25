/**
 * @module fun
 * @param {any} x - Gets checks for type function
 * @return {array} - X if x is a function else an empty function
 */
module.exports = function (x) {
  return typeof x === 'function' ? x : function () {};
};
