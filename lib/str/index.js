/**
 * String ensure module.
 * @module str
 * @param {any} x - Gets checks for type string
 * @return {array} - X if x is a string else an empty string
 * @example
 * ens.str('test123') // 'test123'
 * ens.str({})        // ''
 */
module.exports = function str(x) {
  return typeof x === 'string' ? x : '';
};
