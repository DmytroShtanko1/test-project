exports.command = function (id, value) {
    let _app = this.expect.element(id).to.be.visible;
    this.expect.element(id).to.have.value.which.contains(value);
    return (_app);

};
