const express = require('express');
const router = express.Router();

const productController = require('./../controllers/productController')

router.route('/').get(productController.getProduct).post(productController.postProduct)
router.route('/:id').get(productController.getSingleProduct).patch(productController.updateSingleProduct)


module.exports = router