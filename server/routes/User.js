const express =  require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

router.post('/', (req, res) => {
    User.create(req.body).then(newUser => {
        res.json(newUser)
    })
})

module.exports = router