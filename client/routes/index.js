// external dependencies
const router = require('express').Router()

// internal dependencies
const userRouter = require('./user')

module.exports = (app, passport) => {

    // home route
    router.get('/', (req, res) => {
        res.render("home");
    })

    // login route
    router.post('/login',
        passport.authenticate('local', {
            successRedirect: '/users',
            failureRedirect: '/login'
        })
    )

    // logout route
    router.get('/logout', (req, res) => {
        req.logOut()
        res.redirect('/')
    })

    // attach users router
    router.use('/users', isLoggedIn, userRouter)

    app.use('/', router)
}

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    else
    {
        res.redirect('/')
    }
}