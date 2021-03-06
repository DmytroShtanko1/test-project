/**
 * Logs a message to the console, allowing for adding messages to test output
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .log('Testing submitting form')
 *      .click('#weirdSelectorThatMakesItNotClearWeAreSubmitting');
 * };
 * ```
 *
 * @method log
 * @param {string} message The message to log to the console.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
let chalk = require('chalk');
let infoSymbol = String.fromCharCode('9432');

let log = function (message, callback) {
    let browser = this;

    browser.perform(function () {
        console.log(chalk.blue.bold(infoSymbol) + '  ' + message);
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};

exports.command = log;
