// external dependencies
const router = require('express').Router()
const request = require('request')

// user list route
router.get('/', (req, res) => {
    request.get({
        url: 'http://localhost:8080/api/users'
    }, (err, response, body) => {
        res.render('users', {
            isLoggedIn: req.isAuthenticated(),
            users: JSON.parse(body),
        });
    })
})

// user create route
router.get('/create', (req, res) => {
    res.render('create-user', {
        isLoggedIn: req.isAuthenticated()
    });
})

// user create route
router.post('/', (req, res) => {
    let user = {
        first_name: req.body.name.split(' ')[0],
        last_name: req.body.name.split(' ')[1],
        department: req.body.department,
        position: req.body.position,
        email: req.body.email,
        salary: req.body.salary,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        street: req.body.street
    }
    request.post({
        url: 'http://localhost:8080/api/users',
        form: user
    }, (err, response, body) => {
        if (err) {
            console.log(err)
            return res.redirect('/users')
        }
        if (body) {
            res.redirect('/users')
        }
    })
})

// user edit get route
router.get('/edit/:id', (req, res) => {
    request.get({
        url: `http://localhost:8080/api/users/${req.params.id}`,
    }, function (err, response, body) {
        res.render('edit-user', {
            isLoggedIn: req.isAuthenticated(),
            user: JSON.parse(body)
        });
    })
})

// user edit post route
router.post('/edit/:id', (req, res) => {
    let user = {
        first_name: req.body.name.split(' ')[0],
        last_name: req.body.name.split(' ')[1],
        department: req.body.department,
        position: req.body.position,
        email: req.body.email,
        salary: req.body.salary,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        street: req.body.street
    }
    request.put({
        url: `http://localhost:8080/api/users/${req.params.id}`,
        form: user
    }, (err, response, body) => {
        if (err) {
            console.log(err)
            return
        }
        if (body) {
            res.redirect('/users')
        }
    })
})

// user delete route
router.post('/delete/:id', (req, res) => {
    request.delete({
        url: `http://localhost:8080/api/users/${req.params.id}`,
    }, (err, response, body) => {
        if (err) {
            res.sendStatus(400)
        }
        if (body) {
            res.sendStatus(200)
        }
    })
})

module.exports = router