exports.command = function(element) {
    const ele = element;
    return this.perform(function() {
        this.api.getLocationInView(ele, function(result) {
            this.execute('return window.scroll(0, ' + result.value.y + ')');
        });
    });
};