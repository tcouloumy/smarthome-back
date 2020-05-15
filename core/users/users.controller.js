let models				= require('../../models');
let UsersService 		= require('./users.service');

module.exports = function UsersController() {

	async function authenticate(req, res, next) {

		if (!req.body.username && !req.body.password) {
			return res.status(400).send({
				message: 'Missing username and/or password'
			});
		}

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