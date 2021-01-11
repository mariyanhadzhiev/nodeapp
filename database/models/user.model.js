const bcrypt = require('bcryptjs')

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		first_name: {
			type: Sequelize.STRING
		},
		last_name: {
			type: Sequelize.STRING
		},
		city: {
			type: Sequelize.STRING
		},
		state: {
			type: Sequelize.STRING
		},
		street: {
			type: Sequelize.STRING
		},
		phone: {
			type: Sequelize.STRING
		},
		department: {
			type: Sequelize.STRING
		},
		position: {
			type: Sequelize.STRING
		},
		salary: {
			type: Sequelize.DOUBLE
		},
		email: {
			type: Sequelize.STRING
		},
		hash: {
			type: Sequelize.TEXT
		}
	});

	return User;
};