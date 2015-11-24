var assert = require('assert');

describe('obj', function () {
  var obj = require('../../index.js').obj;

  function isObj(x) {
    return (typeof x === 'object' && !(x instanceof Array));
  }

  it('returns an object no matter what data type it\'s passed', function () {
    assert.equal(isObj(obj('')), true);
    assert.equal(isObj(obj(1)), true);
    assert.equal(isObj(obj(true)), true);
    assert.equal(isObj(obj({})), true);
    assert.equal(isObj(obj(function () {})), true);
  });
  it('returns an object when no data is passed', function () {
    assert.equal(isObj(obj()), true);
  });
  it('returns the passed argument when it\'s an object', function () {
    var t = { a: 'b' };
    assert.equal(obj(t), t); 
  });
});
