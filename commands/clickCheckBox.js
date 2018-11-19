exports.command = function (id) {
    let _app = this.waitForElementVisible(id);
    this.click(id);
    this.expect.element(id).to.be.enabled;
    return (_app);
};
