require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(bodyparser.json())
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection 


db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database!'))


const user = require('./routes/users');
app.use('/login', user)
 

const admin = require('./routes/admin');
app.use('/admin', admin)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server started on port ', PORT));
