import {timeouts} from "../engine/config/timeouts"

exports.command = function (id) {
    let _app = this.waitForElementVisible(id)
        .pause(timeouts.ml)
        .click(id)
        .waitForElementNotPresent(id);
    return (_app);

};
