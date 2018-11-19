import {timeouts} from "../engine/config/timeouts"

exports.command = function (id) {
    let _app = this.expect.element(id).to.be.visible;
    this.pause(timeouts.ll)
        .click(id, result => {
            if (result.status !== 0) {
                console.log(' ✔ Response after clicking is unsuccessful!');
            }
        });
    return (_app);
};
