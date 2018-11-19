import {timeouts} from "../engine/config/timeouts"

exports.command = function (id, text) {
    let _app = this.expect.element(id, timeouts.xxl).to.be.visible;
    this.getText(id, function (result) {
        console.log(` ✔ Text from verified element is: ` + JSON.stringify(result.value))
    })
    this.verify.containsText(id, text);
    return (_app);
};
