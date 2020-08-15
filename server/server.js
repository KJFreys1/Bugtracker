const express = require("express")
const mongoose = require("mongoose")
const parser = require("body-parser")

const users = require('./routes/User')

const app = express()

app.use(parser.json())

const db = require('./config/config').mongoURI

mongoose.connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(err => console.log(err))

app.use('/user', users)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port: ${port}`))