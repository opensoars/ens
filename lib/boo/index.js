/**
 * @param {any} x - Gets checked for type boolean
 * @return {array} - X if x is a boolean else an the boolean true
 */
module.exports = function (x) {
  return typeof x === 'boolean' ? x : true;
};
