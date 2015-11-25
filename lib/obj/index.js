/**
 * Object ensure module.
 * @module obj
 * @param {any} x - Gets checked for type object
 * @return {array} - X if x is an object else an empty object
 * @example
 * ens.obj({a: 'b'}) // {a: 'b'}
 * ens.obj([])       // {}
 */
module.exports = function obj(x) {
  return (typeof x === 'object'&& !(x instanceof Array)) ? x : {};
};
