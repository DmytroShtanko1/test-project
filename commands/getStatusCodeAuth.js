const request = require('request');

exports.command = function (userName, password, code, message) {
    let app = this.url(function (response) {
        let client = this;
        return request
            .get(response.value).auth(userName, password, false)
            .on('response', function (response) {
                client.perform(function () {
                    client.verify.equal(response.statusCode, code, `Status code: Expected: ${code} - Actual: ${response.statusCode}` + message);
                });
            })
    });
    return (app);
};
