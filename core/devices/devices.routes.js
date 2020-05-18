const router 				= require('express').Router();
const DevicesController 	= require('./devices.controller');
const discover 				= require('./discover');


var routes = function() {

	router.get('/', DevicesController.getAll);

	router.get('/:uid', DevicesController.getByUid);
	router.put('/:uid', () => {});
	router.delete('/:uid', () => {});

	router.get('/:uid/discover', discover);

	return router;
};

module.exports = routes;
