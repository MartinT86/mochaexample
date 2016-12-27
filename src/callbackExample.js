module.exports.service = function (param, callback) {
    var calculated = param * param;
    setTimeout(function () {
        callback(null, calculated);
    }, 1000);
}