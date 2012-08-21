var data = require('self').data;
require('page-mod').PageMod({
	include: 'https://dl.dropbox.com/u/1212936/framer/*',
	contentScriptFile: [data.url('zepto.min.js'), data.url('script.js')]
})
