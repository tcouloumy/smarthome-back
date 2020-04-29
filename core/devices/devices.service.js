const models = require('../../models');


module.exports = function DevicesService() {

	let self = this;

	async function getAll() {

		return new Promise((resolve, reject) => {
			models.Device.findAll({}).then(resolve);
		});
	}

	async function getByUid(uid) {

		return new Promise((resolve, reject) => {
			models.Device.findAll({
				where: {
					device_uid: uid
				}
			}).then((data) => {
				if (data.length > 0) {
					resolve(data[0]);
				}
				else {
					reject({});
				}
			});
		});

	}

	return Object.freeze({
		getAll: getAll,
		getByUid: getByUid
	})
}();
