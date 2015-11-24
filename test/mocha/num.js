var assert = require('assert');

describe('num', function () {
  var num = require('../../index.js').num;

  it('returns a number no matter what data type it\'s passed', function () {
    assert.equal(typeof num('') === 'number', true);
    assert.equal(typeof num(1) === 'number', true);
    assert.equal(typeof num(true) === 'number', true);
    assert.equal(typeof num({}) === 'number', true);
    assert.equal(typeof num(function () {}) === 'number', true);
  });
  it('returns a number when no data is passed', function () {
    assert.equal(typeof num() === 'number', true);
  });
  it('returns the passed argument when it\'s a number', function () {
    var t = 1;
    assert.equal(num(t), t); 
  });
});
