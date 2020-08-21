// brought in npm i mysql

const express = require('express')

const app = express()

// return the full obj and not just the first value
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)