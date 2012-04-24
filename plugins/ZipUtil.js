// phonegapdesktop.internal.parseConfigFile('plugins/ZipUtil.json');

if (!window.plugins) {
	window.plugins = {};
}

window.plugins.zipUtil = {

	unzip: function(sourcePath, targetFolder, successCallback, errorCallback) {
		console.log('unzip');
		if (phonegapdesktop.internal.randomException("ziputil")) {
			errorCallback('A random error was generated');
		} else {
			successCallback({
				zipResult: {
					source: '',
					target: ''
				}
			});
		}
	}

};
