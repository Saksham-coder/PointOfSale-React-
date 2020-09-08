const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController')

router.route('/login').post(userController.login)
router.route('/signup').post(userController.signup)
router.route('/:id').get(userController.auth, userController.getUser)



module.exports = router