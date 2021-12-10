const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    test: {
        type: String,
        required: True
    },
    accessionNumber: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true
    },
    dateOfCollection: {
        type: Date,
        required: true
    },
    dateOfRelease: {
        type: Date,
        required: true
    },
    result: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Result', resultSchema)