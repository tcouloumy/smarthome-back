let { Yeelight }  = require('yeelight-node')


module.exports = function YeelightService() {

	var self = this;

	self.lights = {};

	// Let's simulate the result from a sql request
	var db = [{
		uid: 1,
		type: "yeelight",
		ip : "192.168.0.12"
	}]

	// initiating objects
	for (var i = db.length - 1; i >= 0; i--) {
		self.lights[db[i].uid] = new Yeelight({ 
			ip: db[i].ip,
			port: 55443
		});
	}

	function getLightByUid(uid) {
		return self.lights[uid];
	}

	return Object.freeze({
		getLightByUid: getLightByUid
	})
}();
