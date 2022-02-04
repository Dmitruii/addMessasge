const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const bd = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'user',
    database: 'messages',
    port: 9090
})

// Send message
app.post('/', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.email

    bd.query('INSERT INTO messages (name, email, message) values (?, ?, ?)',
        [name, email, message], (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
                res.json('Message is send')
            }
        })
})

// Take messages
app.get('/', (req, res) => {
    bd.query('SELECT * FROM messages', (error, result) => {
        console.log(result)
        if (error) {
            console.log(error)
        } else {
            if (result) {
                res.send(result)
            } else {
                res.send({message: 'Wrong request'})
            }
        }
    })
})

app.listen(3001, () => console.log('running server'))