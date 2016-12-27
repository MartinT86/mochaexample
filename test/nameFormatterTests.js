var nameFormatter = require('../src/nameFormatter')
var assert = require('assert');

describe('nameFormatter', function() {
  describe('format(firstname, surname)', function() {
    it('should return "Hi my name is firstname surname"', function() {
      var firstname = 'Martin';
      var surname = 'Tierney';
      var expectedResult = 'Hi my name is ' + firstname + ' ' + surname;
      var result = nameFormatter.format(firstname, surname);
      assert.equal(result, expectedResult);
    });
    it('should check if either name is defined')
  });
});