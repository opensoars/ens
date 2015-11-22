var assert = require('assert');

describe('arr', function () {
  var arr = require('../../index.js').arr;

  it('returns an array no matter what data type it\'s passed', function () {
    assert.equal(arr('') instanceof Array, true);
    assert.equal(arr(1) instanceof Array, true);
    assert.equal(arr(true) instanceof Array, true);
    assert.equal(arr({}) instanceof Array, true);
    assert.equal(arr(function () {}) instanceof Array, true);
  });
  it('returns an array when no data is passed', function () {
    assert.equal(arr() instanceof Array, true);
  });
  it('returns the passed argument when it\'s an array', function () {
    var t = [1, 2, 3];
    assert.equal(arr(t), t); 
  });
});