exports.command = function (id, text) {
    let _app = this.expect.element(id).to.be.present;
    this.waitForElementPresent(id);
    this.getText(id, function (result) {
        console.log(` ✔ Text from element is: ` + JSON.stringify(result.value.split("\n")))
    })
    this.verify.containsText(id, text);
    return (_app);
};
