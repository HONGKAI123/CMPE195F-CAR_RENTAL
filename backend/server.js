const express = require('express')
var cors = require('cors')
const app =express()
const port = 5000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const dbConnection = require('./db')

app.get('/',(req,res) => res.send('caonima'))

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('success');
})

app.listen(port,() => console.log('nodejs in running on port 5000'))