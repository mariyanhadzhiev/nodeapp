// external dependencies
const router = require('express').Router()

// internal dependencies
const userRouter = require('./users')

//Handle all requests to /api/users
router.use('/users', userRouter)

module.exports = app => {
    app.use('/api', router)
}