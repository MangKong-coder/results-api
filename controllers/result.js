const Result = require('../models/result');

exports.getResults = async (req, res, next) => {
    try {
        const results = await Result.find()
        res.status(200).json({
            message: "Results successfully returned",
            results: results,
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
            message: "New result created successfully",
            result: newResult
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getResult = async (req, res, next) => {
    try {
        const accessionNumber = req.params.accessionNumber;
        const result = await Result.find({accessionNumber: accessionNumber});
        res.status(200).json({
            result: result
        })
    } catch (err) {
        console.log(err)
    }
}

