var assert = require('assert');

describe('str', function () {
  var str = require('../../index.js').str;

  it('returns a string no matter what data type it\'s passed', function () {
    assert.equal(typeof str('') === 'string', true);
    assert.equal(typeof str(1) === 'string', true);
    assert.equal(typeof str(true) === 'string', true);
    assert.equal(typeof str({}) === 'string', true);
    assert.equal(typeof str(function () {}) === 'string', true);
  });
  it('returns a string when no data is passed', function () {
    assert.equal(typeof str() === 'string', true);
  });
  it('returns the passed argument when it\'s a string', function () {
    var t = 'test123';
    assert.equal(str(t), t); 
  });
});
