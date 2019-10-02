'use strict';

let config = require('./config')
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');

let db = require('./models')

let y = require('yeelight-awesome');


let port = config.server.port;
let app = express()

// HTTP logger
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS for cross server querying
app.use(cors());

const yeelight = new y.Yeelight({
	lightIp: '192.168.0.12',
	lightPort: '55443'
});

app.post('/light/toggle', (req, res) => {

	yeelight.connect().then(() => {
		
		yeelight.toggle();
		
		res.status(200).json({
			status: 'ok'
		});
	});

});


app.post('/light/brightness', (req, res) => {

	let brightness = parseInt(req.body.brightness);

	yeelight.connect().then(() => {
		
		yeelight.setBright(brightness, "smooth", 1000);
		
		res.status(200).json({
			status: 'ok'
		});
	});

});


app.post('/light/color', (req, res) => {

	let r = parseInt(req.body.r),
		g = parseInt(req.body.g),
		b = parseInt(req.body.b);

	yeelight.connect().then(() => {
		
		yeelight.setRGB(new y.Color(r, g, b), "smooth", 1000);
		
		res.status(200).json({
			status: 'ok'
		});
	})
	.catch((error) => {
		res.json({
			error: error
		});
	});

});


app.listen(port, () => {
	console.log('API running on port ' + port);
})