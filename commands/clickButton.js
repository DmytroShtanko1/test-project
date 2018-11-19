import {timeouts} from "../engine/config/timeouts"

exports.command = function (id, message) {
    let _app = this.expect.element(id).to.be.visible;
    this.waitForElementVisible(id, timeouts.default, ` ${message } %s appeared after %d ms`);
    this.moveToElement(id, 0, 0);
    //this.waitForJqueryAjaxRequest(3000, `Clicked ${id} after `)
    this.pause(timeouts.ll)
        .click(id, function (result) {
            if (result.status !== 0) {
                console.log(' ✔ Response after clicking is unsuccessful!')
            }
        });
    return (_app);
};