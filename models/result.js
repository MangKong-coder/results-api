const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    test: {
        type: String,
        required: true
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
    output: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Result', resultSchema)