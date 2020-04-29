const router 				= require('express').Router();
const DevicesController 	= require('./devices.controller');

var routes = function() {

	router.get('/', DevicesController.getAll);

	router.get('/:uid', DevicesController.getByUid);
	router.put('/:uid', () => {});
	router.delete('/:uid', () => {});

	return router;
};

module.exports = routes;
