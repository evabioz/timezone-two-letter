var rawData = require('./data.json');

var libraries = {

	raw: rawData,

	parse: function(timezone_name) {
		if (!timezone_name) {
			return;
		}
		var i = timezone_name.lastIndexOf("/");
		var key = timezone_name.substr(i + 1);
		return rawData[key];
	}

};

module.exports = libraries;