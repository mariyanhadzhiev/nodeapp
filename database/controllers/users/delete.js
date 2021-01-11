//Internal dependencies
const db = require("../../db.config")
const User = db.users

// Delete a User with the specified id in the request
module.exports = (req, res) => {
	const id = req.params.id;

	User.destroy({
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "User was deleted successfully!"
		  });
		} else {
		  res.send({
			message: `Cannot delete User with id=${id}. Maybe User was not found!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Could not delete User with id=" + id
		});
	  });
}