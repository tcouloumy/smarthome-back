let router = require('express').Router();
let YeelightController = require('./yeelight.controller');


var routes = function() {

	router.post('/:uid/toggle', YeelightController.toggle);
	router.post('/:uid/brightness', YeelightController.setBrightness);
	router.post('/:uid/color', YeelightController.setColor);
	router.post('/:uid/temperature', YeelightController.setTemperature);

	return router;
};

module.exports = routes;
