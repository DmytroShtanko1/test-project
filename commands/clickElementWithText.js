import {timeouts} from "../engine/config/timeouts"

exports.command = function (selector, text) {
    this.elements('css selector', selector, function (links) {
        let success = false;
        this.pause(timeouts.ll);
        for (let i = 0; i < links.value.length; i++) {
            if (success === true)
                break;
            else
                this.elementIdText(links.value[i].ELEMENT, function (result) {
                    if (result.value === text) {
                        console.log(' ✔ Selecting ' + selector + ': ' + result.value);
                        this.elementIdClick(links.value[i].ELEMENT);
                        success = true;
                    }
                })
        }
    });
};