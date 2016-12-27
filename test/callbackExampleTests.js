var callbackExample = require('../src/callbackExample')
var assert = require('assert');

describe('callbackExample', function () {
    describe('service(param, callback)', function () {
        it('should square the first param', function (done) {
            var param = 3;
            var expectedResult = 9;
            callbackExample.service(param, function (err, data) {
                assert.equal(data, expectedResult);
                done();
            });
        });
    });
});