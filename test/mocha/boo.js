var assert = require('assert');

describe('boo', function () {
  var boo = require('../../index.js').boo;

  it('returns a boolean no matter what data type it\'s passed', function () {
    assert.equal(typeof boo('') === 'boolean', true);
    assert.equal(typeof boo(1) === 'boolean', true);
    assert.equal(typeof boo(true) === 'boolean', true);
    assert.equal(typeof boo({}) === 'boolean', true);
    assert.equal(typeof boo(function () {}) === 'boolean', true);
  });
  it('returns a boolean when no data is passed', function () {
    assert.equal(typeof boo() === 'boolean', true);
  });
  it('returns the passed argument when it\'s a boolean', function () {
    var t = true;
    assert.equal(boo(t), t); 
  });
});
