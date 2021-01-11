//Internal dependencies
const db = require('../../db.config')
const User = db.users

// Create and Save a new User
module.exports = (req, res) => {
	// Validate request
	if (!req.body.email) {
		res.status(400).json({
			message: 'Email can not be empty!'
		})
		return
	}
	
	if (!req.body.salary) {
		res.status(400).json({
			message: 'Salary can not be empty!'
		})
		return
	}

	if (!req.body.department) {
		res.status(400).json({
			message: 'Username can not be empty!'
		})
		return
	}
	
	if (!req.body.city) {
		res.status(400).json({
			message: 'City can not be empty!'
		})
		return
	}
	
	if (!req.body.state) {
		res.status(400).json({
			message: 'State can not be empty!'
		})
		return
	}
	
	if (!req.body.street) {
		res.status(400).json({
			message: 'Street can not be empty!'
		})
		return
	}

	if (!req.body.phone) {
		res.status(400).json({
			message: 'Phone can not be empty!'
		})
		return
	}
	
	if (!req.body.position) {
		res.status(400).json({
			message: 'Position can not be empty!'
		})
		return
	}

	// Create a User 
	const user = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		hash: req.body.hash,
        city: req.body.city,
        state: req.body.state,
        street: req.body.street,
        phone: req.body.phone,
        salary: req.body.salary,
        position: req.body.position,
        department: req.body.department
	}

	console.log('api create answer', req.body)
	// Save User in the database
	User.create(user)
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(500).json( err !== null ? err: 'Some error occured during user creation!' )
		})
}
