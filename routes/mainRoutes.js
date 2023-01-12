const { application } = require('express')
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.pageLoad)
router.get('/written', mainController.pageLoadWithTableData)
router.post('/upload' , mainController.uploadFiles)
router.get('/readFiles', mainController.readFiles)

module.exports = router