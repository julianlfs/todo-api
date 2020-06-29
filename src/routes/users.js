const express = require('express')
const User = require('../models/users')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch(error) {
        res.status(400).send(error)
    }   
})

router.get('/users', (req, res) => {
    const users = [
        {name: 'user1'},
        {name: 'user2'}
    ]
    
    res.status(200).send(users)
})

router.get('/users/:id', (req, res) => {
    const user =  {name: 'user1'}
    res.status(200).send(user)
})

router.patch('/users/:id', (req, res) => {
    res.send()
})

router.delete('/users/:id', (req, res) => {
    res.send()
})

module.exports = router