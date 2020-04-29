let router 				= require('express').Router();
let UsersController 	= require('./users.controller');


var routes = function() {

	router.post('/authenticate', UsersController.authenticate);

	return router;
};

module.exports = routes;
