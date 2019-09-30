const y = require('yeelight-awesome');

const discover = new y.Discover({
	port: 1982,
	debug: true
});

discover.once("deviceAdded", (device) => {

	console.log(device.host);
	console.log(device.port);

	const yeelight = new y.Yeelight({
		lightIp: device.host,
		lightPort: device.port
	});

	yeelight.on("connected", () => {
		yeelight.setRGB(new y.Color(123, 255, 65), "smooth", 5000);
		// console.log("connected yupi !");
	});

	yeelight.connect();
});

discover.start();