let { Yeelight }  		= require('yeelight-node')
let pt 					= require('promise-timeout');
let models				= require('../../models');
let YeelightService 	= require('./yeelight.service');


module.exports = function YeelightController() {

	function getProperties(req, res) {}

	async function toggle(req, res) {
		
		const uid = parseInt(req.params.uid);

		if (!uid || !Number.isInteger(uid)) {
			return res.status(400).send({});
		}

		let light = await YeelightService.getLightByUid(req.params.uid);

		pt.timeout(light.toggle(), 2000).then((data) => {
			return res.send(JSON.parse(data));
		})
		.catch((err) => {
			// TODO : a helper error handler
			if (err instanceof pt.TimeoutError) {
				return res.status(504).send(err);
			}
			else {
				return res.status(500).send(err);
			}
		});
	}

	async function setBrightness(req, res) {
		
		let light = await YeelightService.getLightByUid(req.params.uid);
		let brightness = parseInt(req.body.brightness);

		pt.timeout(light.set_bright(brightness), 2000).then((data) => {
			return res.send(JSON.parse(data));
		})
		.catch((err) => {
			// TODO : a helper error handler
			if (err instanceof pt.TimeoutError) {
				console.log(err);
				return res.status(504).send(err);
			}
			else {
				return res.status(500).json(err);
			}
		});
	}

	async function setColor(req, res) {

		let light = await YeelightService.getLightByUid(req.params.uid);
		let r = parseInt(req.body.r),
			g = parseInt(req.body.g),
			b = parseInt(req.body.b);

		// pt.timeout(light.setRGB(new Yeelight.Color(r, g, b), "smooth", 1000), 2000).then((data) => {
		pt.timeout(light.set_rgb([r, g, b], "smooth", 1000), 2000).then((data) => {
			return res.send(JSON.parse(data));
		})
		.catch((err) => {
			// TODO : a helper error handler
			if (err instanceof pt.TimeoutError) {
				console.log(err);
				return res.status(504).send(err);
			}
			else {
				return res.status(500).json(err);
			}
		})
	}

	async function setTemperature(req, res) {

		let light = await YeelightService.getLightByUid(req.params.uid);
		let value = parseInt(req.body.value);

		pt.timeout(light.set_ct_abx(value, "smooth", 1000), 2000).then((data) => {
			return res.send(JSON.parse(data));
		})
		.catch((err) => {
			// TODO : a helper error handler
			if (err instanceof pt.TimeoutError) {
				console.log(err);
				return res.status(504).send(err);
			}
			else {
				return res.status(500).json(err);
			}
		})
	}

	return Object.freeze({
		toggle: toggle,
		setBrightness: setBrightness,
		setColor: setColor,
		setTemperature: setTemperature
	});
}();
