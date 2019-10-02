
module.exports = (sequelize, DataTypes) => {

	const device = sequelize.define('device', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		}
	},
	{});

	return device;
};
