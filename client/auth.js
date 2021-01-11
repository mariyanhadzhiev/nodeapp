// load all the things we need
const LocalStrategy = require('passport-local').Strategy

// load up the users json data
const user = require('./config').user

// expose this function to our app using module.exports
module.exports = function (passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        return done(null, user.id)
    })

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        if (id === user.id){
            return done(null, { id: id, name: user.name})
        }
        else {
            return done(null, false)
        }
    })

    passport.use('local', 
        new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            if (username !== user.username) {
                return done(null, false)
            } 
            
            if (password !== user.password) 
            {
                return done(null, false)
            }

            if (username === user.username && password === user.password) {
                return done(null, { id: user.id, name: user.name})
            }
        }))
}