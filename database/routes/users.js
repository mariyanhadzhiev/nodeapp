// external dependencies
const router = require('express').Router()

// internal dependencies
const userController = require('../controllers').users

// users find all route
router.get('/', userController.findAll)

// users find by id route
router.get('/:id', userController.findById)

// user create route
router.post('/', userController.create)

// update user route
router.put('/:id', userController.update)

// delete user route
router.delete('/:id', userController.deleteOne)

// delete all users route
router.delete('/', userController.deleteAll)

module.exports = router