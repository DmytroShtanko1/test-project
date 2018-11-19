/*
*Change the view to the pop-up(new) window
*/

exports.command = function () {
    let that = this;
    let _app = this.windowHandles(async function (result) {
        let newWindow;
        newWindow = result.value[1];
        await that.switchWindow(newWindow);
        if (!result.value[1]) {
            throw new Error(` ✔ Second tab is absent.`);
        } else {
            console.log(` ✔ New opened window has ID: ${result.value[1]}`);
        }
    });
    return (_app);
};
