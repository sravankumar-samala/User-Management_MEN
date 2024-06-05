const express = require('express')
const userController = require('../controllers/userControllers')
const router = express.Router()


router.post('/createUser', userController.createUser)

router.get('/getAllUsers', userController.getAllUsers)

router.get('/getUser/:id', userController.getSingleUser)

router.put('/updateUser/:id', userController.updateUser)

router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router