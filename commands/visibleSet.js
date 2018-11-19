import {timeouts} from "../engine/config/timeouts"

exports.command = function (id, value, message) {
    let _app = this.expect.element(id).to.be.visible;
    this.waitForElementVisible(id, timeouts.default, ` ${message } %s was hided after %d ms`);
    this.setValue(id, value);
    return (_app);
};

