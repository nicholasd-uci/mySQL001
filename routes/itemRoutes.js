// file name can be anything! 

const router = require('express').Router()
const db = require('../db')

const { join } = require('path')
const fs = require('fs')



// Get all items
router.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, items) => {
        if (err) { console.log(err) }
        res.json(items)
    })
})    


// Post one item
router.post('/items/', (req, res) => {
    db.query('INSERT INTO items SET ?', req.body, (err, results) => {
        if (err) { console.log(err) }
        
    })
})

// put one item
router.put('/items/:id', (req, res) => {

})

// DELETE one item
router.delete('/:id', (req, res) => {

})

module.exports = router