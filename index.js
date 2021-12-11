const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const resultRouter = require('./routes/result')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();

})

app.use('/result', resultRouter)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message})
})

mongoose.connect(process.env.DB_URI)
.then(result => {
    app.listen(process.env.PORT);
}).catch(err => console.log(err))

