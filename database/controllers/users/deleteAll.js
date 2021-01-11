//Internal dependencies
const db = require("../../db.config")
const User = db.users

// Delete all Users from the database.
module.exports = (req, res) => {
	User.destroy({
		where: {},
		truncate: false
	  })
		.then(nums => {
		  res.send({ message: `${nums} Users were deleted successfully!` });
		})
		.catch(err => {
		  res.status(500).send({
			message:
			  err.message || "Some error occurred while removing all tutorials."
		  });
		});
}
