exports.command = function (id, x, y) {
    let _app = this.expect.element(id).to.be.visible;
    this.moveToElement(id, x, y);
    return (_app);
};
