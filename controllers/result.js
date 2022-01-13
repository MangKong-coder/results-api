const Result = require('../models/result');

exports.getResults = async (req, res, next) => {
    try {
        const results = await Result.find()
        res.status(200).json({
            result: results,
        })
    } catch (err) {
        console.log(err)
    }
}

exports.postResult = async (req, res, next) => {
    try {
        const test = req.body.test;
        const accessionNumber = req.body.accessionNumber;
        const fullName = req.body.fullName;
        const dateOfCollection = req.body.dateOfCollection;
        const dateOfRelease = req.body.dateOfRelease;
        const output = req.body.output
        const result = new Result({
            test: test,
            accessionNumber: accessionNumber,
            fullName: fullName,
            dateOfCollection: dateOfCollection,
            dateOfRelease: dateOfRelease,
            output: output
        })
        const newResult = await result.save()
        res.status(201).json({
            result: newResult
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getResult = async (req, res, next) => {
    try {
        const resultId = req.params.resultId;
        const result = await Result.findById(resultId);
        res.status(200).json({
            result: result
        })
    } catch (err) {
        console.log(err)
    }
}

exports.updateResult = async (req, res, next) => {
    const resultId = req.params.resultId
    try {
        const test = req.body.test;
        const accessionNumber = req.body.accessionNumber;
        const fullName = req.body.fullName;
        const dateOfCollection = req.body.dateOfCollection;
        const dateOfRelease = req.body.dateOfRelease;
        const output = req.body.output
        const result  = await Result.findById(resultId)
        if (!result) {
            throw new Error('Result not found')
        }
        result.test = test
        result.accessionNumber = accessionNumber
        result.fullName = fullName
        result.dateOfCollection = dateOfCollection
        result.dateOfRelease = dateOfRelease
        result.output = output
        const newResult = await result.save()
        res.status(200).json({
            result: newResult
        })
    } catch (err) {
        console.log(err)
    }
}

