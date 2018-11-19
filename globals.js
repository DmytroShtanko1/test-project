const chromedriver = require('chromedriver');

module.exports = {
    before: (done) => {
        chromedriver.start();
        done();
    },
    after: (done) => {
        chromedriver.stop();
        done();
    },

    //abortOnAssertionFailure: false,
    waitForConditionPollInterval: 500,
    waitForConditionTimeout: 30000,
    retryAssertionTimeout: 20000,
    operationTimeout: 10000,

    /*
   * Define if the test failed when many HTML elements are found when
   * we expect only one
   */
    throwOnMultipleElementsReturned: false,


    "test": function (browser) {
        console.log(browser.globals.myvar); // "whatever"
    }
};
