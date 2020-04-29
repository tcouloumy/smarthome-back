let models				= require('../../models');
let UsersService 		= require('./users.service');

module.exports = function UsersController() {

	async function authenticate(req, res, next) {
		UsersService.authenticate(req.body)
		.then(user => user ? res.json(user) : res.status(400).json({ 
			message: 'Username or password is incorrect'
		}))
		.catch(err => next(err));
	}

	return Object.freeze({
		authenticate: authenticate
	});

}()