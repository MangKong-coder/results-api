const express = require('express');

const mongoose = require('mongoose')

const resultController = require('./controllers/result')

const app = express();

app.get('/', resultController.getResult)

app.use(express.json())

mongoose.connect('mongodb+srv://mangkong:XxJ3b9HsU9XVrQV@cluster0.y7bs8.mongodb.net/results?retryWrites=true&w=majority')
.then(result => {
    app.listen(5000);
}).catch(err => console.log(err))