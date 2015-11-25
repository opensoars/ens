/**
 * Boolean ensure module.
 * @module boo
 * @param {any} x - Gets checked for type boolean
 * @return {array} - X if x is a boolean else an the boolean true
 * @example
 * ens.boo(false) // false
 * ens.boo({})    // true
 */
module.exports = function boo(x) {
  return typeof x === 'boolean' ? x : true;
};
