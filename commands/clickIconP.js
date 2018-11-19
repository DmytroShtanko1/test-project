import {timeouts} from "../engine/config/timeouts"

exports.command = function (id) {
    let _app = this.expect.element(id).to.be.present;
    this.waitForElementPresent(id, timeouts.default)
        .pause(timeouts.ll)
        .click(id);
    return (_app);

};
