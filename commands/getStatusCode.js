const assert = require('assert')
const request = require('request')


exports.command = async function (link, token, code) {
    let client = this;
    return request
        .get(link, {
            headers: {
                'Authorization': token
            }
        })

        .on('response', async function (response) {
            await client.perform(function () {
                client.verify.equal(response.statusCode, code, `Status code ${link}: Expected: ${code} - Actual: ${response.statusCode}`);
            });
        })
};