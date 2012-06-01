if (!window.plugins) {
    window.plugins = {};
}

window.FileDownload = {
    install: function() {}
};

window.plugins.Download = {

    callbackIdx: 0,

    callbackMap: {},

    status: ['idle', 'download', 'unzip', 'finished', 'canceled', 'error'],

    start: function(url, successCallback, errorCallback, progressCallback, outPath) {
        // console.log('start', arguments);
        if (phonegapdesktop.internal.randomException("filedownload")) {
            console.log('FileDownload: a random error was generated');
        } else {
            var timer, start = 0, limit = 50, progress = 0, status = 1, total = 25;
            timer = setInterval(function() {
                progressCallback.call(this, {
                    status: status,
                    progress: Math.floor(progress/total)
                });
                start++;
                progress++;
                if (start === total) {
                    status = 2;
                    progress = 0;
                } else if (start === limit - 1) {
                    status = 3;
                    progress = 0;
                } else if (start === limit) {
                    clearInterval(timer);
                    setTimeout(successCallback, 1000);
                }
            }, 500);
        }
    }

};
