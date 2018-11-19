exports.command = function () {
    let _app = this.getLog('browser', function (logEntriesArray) {
        logEntriesArray.forEach(function (log) {
            console.log('[' + log.level + ' ] ' + log.timestamp + ' : ' + log.message);
        });
    });
    return (_app);
};
