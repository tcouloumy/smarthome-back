module.exports = (sequelize, DataTypes) => {

	const device = sequelize.define('user', {
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user_username: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		user_password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		user_firstName: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		user_lastName: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
		user_role: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		}
	},
	{});

	return device;
};
