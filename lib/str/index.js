/**
 * @param {any} x - Gets checks for type string
 * @return {array} - X if x is a string else an empty string
 */
module.exports = function (x) {
  return typeof x === 'string' ? x : '';
};
