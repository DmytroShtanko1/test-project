exports.command = function (id, value) {
    let _app = this.waitForElementVisible(id)
        .clearValue(id)
        .setValue(id, value)
        .verify.valueContains(id, value);
    return (_app);

};
