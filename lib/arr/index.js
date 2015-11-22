/**
 * @param {any} x - Gets checks for type array
 * @return {array} - X if x is an array else an empty array
 */
module.exports = function (x) {
  return x instanceof Array ? x : [];
};
