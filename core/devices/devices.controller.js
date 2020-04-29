const models 			= require('../../models');
const DevicesService 	= require('./devices.service');

module.exports = function DevicesController() {

	async function getAll(req, res) {
		
		const devicesData = await DevicesService.getAll();

		return res.send(devicesData.map(device => device.dataValues)); 
	}

	async function getByUid(req, res) {
		
		const uid = parseInt(req.params.uid);

		if (!uid || !Number.isInteger(uid))
			return res.status(400).send({});

		const device = await DevicesService.getByUid(req.params.uid);

		return res.send(device); 
	}

	return Object.freeze({
		getAll: getAll,
		getByUid: getByUid
	});

}();
