/**
 * @module num
 * @param {any} x - Gets checked for type number
 * @return {array} - X if x is a number else the number 1
 */
module.exports = function (x) {
  return typeof x === 'number' ? x : 1;
};
