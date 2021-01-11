//Internal dependencies
const db = require("../../db.config")
const User = db.users

// Retrieve all Users from the database.
module.exports = (req, res) => {
	let id = req.params.id
	User.findByPk(id)
		.then(data => {
			console.log(id, data)
			res.json(data)
		})
		.catch(err => {
			res.status(500).json({
				message:
					err.message || "Some error occurred while retrieving user."
			})
		})
}