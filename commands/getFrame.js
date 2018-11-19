/**
 *Фиксируемся на фрейме контента
 **/

exports.command = function (id, frameName) {
    let _app = this.waitForElementVisible(id)
        .frame(frameName);
    return (_app);

};
