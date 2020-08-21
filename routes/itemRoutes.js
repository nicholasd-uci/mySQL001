// file name can be anything! 

const router = require('express').Router()
const db = require('../db')

const { join } = require('path')
const fs = require('fs')



// GET all items
router.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, items) => {
        if (err) { console.log(err) }
        res.json(items)
    })
})    


// POST one item
router.post('/items/', (req, res) => {
    db.query('INSERT INTO items SET ?', req.body, err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
    })
})

// PUT one item
router.put('/items/:id', (req, res) => {
    db.query('/UPDATE items SET isDONE = ? WHERE id = ?', [req.body.isDone, req.params.id], err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
    })
})

// DELETE one item
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM items WHERE id = ?', req.params.id, err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
    })
})

module.exports = router