const express = require('express');
const router = express.Router();

const sellController = require('./../controllers/sellController')

router.route('/').post(sellController.postSell)
router.route('/:id').post(sellController.postSell).get(sellController.getSell)

module.exports = router