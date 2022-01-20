const express =  require('express')
const router = express.Router()
const resultController = require('../controllers/result')


router.get('/results', resultController.getResults);

router.post('/results', resultController.postResult);

router.get('/results/:accessionNumber', resultController.getResult);

router.put('/results/:accessionNumber', resultController.updateResult);


module.exports = router