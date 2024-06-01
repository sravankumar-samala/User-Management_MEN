const User = require('../models/User')

const newUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.send('User created successfully')
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Server Error' })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).send(allUsers)
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = { newUser, getAllUsers }