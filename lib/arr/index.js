/**
 * Array ensure module.
 * @module arr
 * @param {any} x - Gets checked for type array
 * @return {array} - X if x is an array else an empty array
 * @example
 * ens.arr([1, 2]) // [1, 2]
 * ens.arr({})     // []
 */
module.exports = function arr(x) {
  return x instanceof Array ? x : [];
};
