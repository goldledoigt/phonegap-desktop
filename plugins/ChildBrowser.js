// phonegapdesktop.internal.parseConfigFile('plugins/ChildBrowser.json');

if (!window.plugins) {
	window.plugins = {};
}

window.ChildBrowser = {
	install: function() {}
};

window.plugins.childBrowser = {

	showWebPage: function(url) {
		if (phonegapdesktop.internal.randomException("childbrowser")) {
			console.log('ChildBrowser: a random error was generated');
		} else {
			// window.open(url);
		}
	}

};
