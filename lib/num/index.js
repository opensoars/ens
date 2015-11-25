/**
 * Number ensure module.
 * @module num
 * @param {any} x - Gets checked for type number
 * @return {array} - X if x is a number else the number 1
 * @example
 * ens.num(555) // 555
 * ens.num({})  // 1
 */
module.exports = function num(x) {
  return typeof x === 'number' ? x : 1;
};
