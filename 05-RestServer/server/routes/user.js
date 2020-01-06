const express = require('express')
const app = express()
const User = require('../models/user')


app.get('/usuario/:id', function (req, res) {
    let id = req.params.id
    res.json({
        id
    })
})

app.post('/usuario', function (req, res) {
    let body = req.body
    let user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role
    });

    user.save((err, userDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            user: userDB
        })
    })

})

app.put('/usuario/:id', function (req, res) {
    let userId = req.params.id
    let user = req.body
    res.json({

        userId,
        user
    })
})
app.delete('/usuario/:id', function (req, res) {
    res.json('Hello World')
})

module.exports = app;
