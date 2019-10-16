let y = require('yeelight-awesome');
let { Yeelight }  = require('yeelight-node-binding')

module.exports = function YeelightController(gladys) {

	function toggle(req, res) {

		let yeelight = new Yeelight({ 
			ip: '192.168.0.12',
			port: 55443
		});
		
		yeelight.toggle().then((data) => {
			res.json(JSON.parse(data));
			return;
		})
		.catch((err) => {
			res.sendStatus(503).json(JSON.parse(data));
			return;
		});

	}

	function setBrightness(req, res) {
		
		let brightness = parseInt(req.body.brightness);
		let yeelight = new Yeelight({ 
			ip: '192.168.0.12',
			port: 55443
		});

		yeelight.set_bright(brightness).then((data) => {
			res.json(JSON.parse(data));
			return;
		})
		.catch((err) => {
			res.sendStatus(503).json(JSON.parse(data));
			return;
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
};
