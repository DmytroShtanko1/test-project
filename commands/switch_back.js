/*
*Change the view to the pop-up(new) window
*/

exports.command = function () {
    let that = this;
    let _app = this.windowHandles(function (result) {
        let newWindow;
        newWindow = result.value[0];
        that.switchWindow(newWindow);
    });
    return (_app);
};
