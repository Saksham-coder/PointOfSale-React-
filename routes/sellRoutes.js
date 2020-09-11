const express = require('express');
const router = express.Router();

const sellController = require('./../controllers/sellController')

router.route('/').post(sellController.postSell)

module.exports = router