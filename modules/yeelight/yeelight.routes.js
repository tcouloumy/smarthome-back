let router = require('express').Router();
let YeelightController = require('./yeelight.controller')();

var routes = function() {

	router.post('/light/toggle', YeelightController.toggle);
	router.post('/light/brightness', YeelightController.setBrightness);
	router.post('/light/color', YeelightController.setColor);

	return router;
};

module.exports = routes;
