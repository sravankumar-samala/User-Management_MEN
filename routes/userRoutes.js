const express = require('express')
const userController = require('../controllers/userControllers')
const router = express.Router()


router.post('/add-user', userController.newUser)

router.get('/all-users', userController.getAllUsers)

module.exports = router