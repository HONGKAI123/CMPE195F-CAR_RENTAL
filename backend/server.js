const express = require('express')
const app =express()
const port = 5000
const dbConnection = require('./db')
app.get('/',(req,res) => res.send('caonima'))

app.listen(port,() => console.log('nodejs in running on port 5000'))