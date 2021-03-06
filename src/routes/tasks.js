const express = require('express')

const router = new express.Router()

router.post('/tasks', (req, res) => {
    res.status(201).send()
})

router.get('/tasks', (req, res) => {
    res.send()
})

router.get('/tasks/:id', (req, res) => {
    res.send()
})

router.patch('/tasks/:id', (req, res) => {
    res.send()
})

router.delete('/tasks/:id', (req, res) => {
    res.send()
})

module.exports = router