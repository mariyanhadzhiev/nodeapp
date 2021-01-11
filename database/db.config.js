// External dependencies
const Sequelize = require("sequelize");

// Internal dependencies
const config = require('./config')

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: config.dialect,
	operatorsAliases: false,
	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/user.model")(sequelize, Sequelize);

module.exports = db