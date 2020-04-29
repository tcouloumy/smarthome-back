let models			= require('../../models');
let { Yeelight }  	= require('yeelight-node')


module.exports = function YeelightService() {

	var self = this;

	async function getLightByUid(uid) {

		return new Promise((resolve, reject) => {
			models.Device.findAll({
				where: {
					device_uid: uid
				}
			}).then((data) => {
				if (data.length > 0) {
					resolve(new Yeelight({ 
						ip: data[0].device_ip,
						port: data[0].device_port
					}))
				}
				else {
					reject({});
				}
			});
		});
	}

	return Object.freeze({
		getLightByUid: getLightByUid
	})
}();
