let router = require('express').Router();
let YeelightController = require('./yeelight.controller');


var routes = function() {

	router.post('/light/:uid/toggle', YeelightController.toggle);
	router.post('/light/:uid/brightness', YeelightController.setBrightness);
	router.post('/light/:uid/color', YeelightController.setColor);

	return router;
};

module.exports = routes;
