/**
 * @param {any} x - Gets checks for type arrayr
 * @return {array} - Either x when it's an array or an empty array
 */
module.exports = function (x) {
  return x instanceof Array ? x : [];
};