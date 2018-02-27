var rawData = require('./data.json');

var libraries = {

	raw: rawData,

	getTwoLetter: function(timezone_name) {
		var i = timezone_name.lastIndexOf("/");
		var key = timezone_name.substr(i + 1);
	  return rawData[key];
	}

};

module.exports = libraries;