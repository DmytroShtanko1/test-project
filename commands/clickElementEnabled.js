exports.command = function (id) {
    let _app = this.waitForElementVisible(id);
    this.expect.element(id).to.be.enabled;
    this.click(id);
    return (_app);

};
