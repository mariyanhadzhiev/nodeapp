//Internal dependencies
const db = require("../../db.config")
const User = db.users

// Update a User by the id in the request
module.exports = (req, res) => {
	const id = req.params.id;

	User.update(req.body, {
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "User was updated successfully."
		  });
		} else {
		  res.send({
			message: `Cannot update User with id=${id}. Maybe User was not found or fields are empty!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error updating User with id=" + id
		});
	  });
}
