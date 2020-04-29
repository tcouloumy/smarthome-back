
module.exports = (sequelize, DataTypes) => {

	const device = sequelize.define('device', {
		device_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		device_uid: {
			unique: true,
			type: DataTypes.INTEGER
		},
		device_type: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		device_name: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		device_ip: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		device_port: {
			allowNull: false,
			unique: true,
			type: DataTypes.INTEGER,
		}
	},
	{});

	return device;
};
