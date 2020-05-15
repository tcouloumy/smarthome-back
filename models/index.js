let Sequelize = require('sequelize');
let config = require('./../config');

// SQLite
const sequelize = new Sequelize(config.db.name,
	config.db.user,
	config.db.password,
	config.db.details
);

const DeviceModel = require('./device.model');
const UserModel = require('./user.model');

const models = {
	Device: DeviceModel(sequelize, Sequelize),
	User: UserModel(sequelize, Sequelize)
};

// TODO
// Object.values(models)
//   .filter((model) => typeof model.associate === 'function')
//   .forEach((model) => model.associate(models));

const db = {
	...models,
	sequelize
};

module.exports = db;