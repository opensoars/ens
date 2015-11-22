var ens = {};

ens.arr = function (x) {
  return x instanceof Array ? x : [];
};

ens.str = function (x) {
  return typeof x === 'string' ? x : '';
};

ens.num = function (x) {
  return typeof x === 'number' ? x : 1;
};

ens.boo = function (x) {
  return typeof x === 'boolean' ? x : true;
};

ens.obj = function (x) {
  return (typeof x === 'object' && !(x instanceof Array)) ? x : {};
};

ens.fun = function (x) {
  return typeof x === 'function' ? x : function () {};
};

module.exports = ens;