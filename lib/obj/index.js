/**
 * @param {any} x - Gets checked for type object
 * @return {array} - X if x is an object else an empty object
 */
module.exports = function (x) {
  return (typeof x === 'object'&& !(x instanceof Array)) ? x : {};
};
