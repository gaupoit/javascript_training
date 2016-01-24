'use strict'
const webdriverio = require('webdriverio');

var client = webdriverio.remote({
	desiredCapabilities: {
		browserName: 'phantomjs'
	},
	logLevel: 'silent',
	waitforTimeout: 15000,
});

module.exports = client;