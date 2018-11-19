exports.command = function (id, text) {
    let _app = this.waitForElementPresent(id)
        .setValue(id, text);
    return (_app);

};
