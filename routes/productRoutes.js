const express = require('express');
const router = express.Router();

const productController = require('./../controllers/productController')

router.route('/').get(productController.getProduct).post(productController.postProduct)



module.exports = router