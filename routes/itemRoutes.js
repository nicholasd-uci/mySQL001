// file name can be anything! 

const router = require('express').Router()
const db = require('../db')

const { join } = require('path')
const fs = require('fs')


router.get('/items', (req, res) => {
    fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
        res.json(JSON.parse(data))
    })
})

// Post one item
router.post('/items/', (req, res) => {

})

// put one item
router.put('/items/:id', (req, res) => {

})

// DELETE one item
router.delete('/:id', (req, res) => {

})

module.exports = router