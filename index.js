const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv').config()

const resultRouter = require('./routes/result')

const app = express();

app.use(express.json())

app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
//     next();

// })

app.get('/', (req, res, next) => {
    res.send('<h1>This is an API used for Antigen and Antibody results</h1><p>Go to route /result/results to see all of the results</p> <footer> <small>&copy; Copyright 2021, James Domingo. All Rights Reserved</small> </footer>')
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

