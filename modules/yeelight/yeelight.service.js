let models			= require('../../models');
let { Yeelight, Client }  	= require('yeelight-node')


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

	async function discover() {


		return new Promise((resolve, reject) => {

			var client = new Client();
			var lights = [];

			client.bind(yeelight => {

				lights = [...lights, {
					ip: yeelight.ip,
					port: yeelight.port,
					type: 'yeelight'
				}];

				client.socket.close();
				resolve(lights);

			});

		});
	}


	return Object.freeze({
		getLightByUid: getLightByUid,
		discover: discover
	})
}();
