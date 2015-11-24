var assert = require('assert');

describe('fun', function () {
  var fun = require('../../index.js').fun;

  it('returns a function no matter what data type it\'s passed', function () {
    assert.equal(typeof fun('') === 'function', true);
    assert.equal(typeof fun(1) === 'function', true);
    assert.equal(typeof fun(true) === 'function', true);
    assert.equal(typeof fun({}) === 'function', true);
    assert.equal(typeof fun(function () {}) === 'function', true);
  });
  it('returns a function when no data is passed', function () {
    assert.equal(typeof fun() === 'function', true);
  });
  it('returns the passed argument when it\'s a function', function () {
    var t = function () {};
    assert.equal(fun(t), t); 
  });
});
