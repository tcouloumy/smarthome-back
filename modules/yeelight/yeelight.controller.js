let { Yeelight }  		= require('yeelight-node')
let pt 					= require('promise-timeout');
let YeelightService 	= require('./yeelight.service');


module.exports = function YeelightController() {

	function toggle(req, res) {

		let light = YeelightService.getLightByUid(req.params.uid);
		
		pt.timeout(light.toggle(), 2000).then((data) => {
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

	function setBrightness(req, res) {
		
		let brightness = parseInt(req.body.brightness);
		let light = YeelightService.getLightByUid(req.params.uid);

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

	function setColor(req, res) {

		// const yeelight = new y.Yeelight({
		// 	lightIp: '192.168.0.12',
		// 	lightPort: '55443'
		// });

		// let r = parseInt(req.body.r),
		// 	g = parseInt(req.body.g),
		// 	b = parseInt(req.body.b);

		// yeelight.connect().then(() => {
			
		// 	yeelight.setRGB(new y.Color(r, g, b), "smooth", 1000);
			
		// 	res.status(200).json({
		// 		status: 'ok'
		// 	});
		// })
		// .catch((error) => {
		// 	res.json({
		// 		error: error
		// 	});
		// });
	}

	return Object.freeze({
		toggle: toggle,
		setBrightness: setBrightness,
		setColor: setColor
	});
}();
