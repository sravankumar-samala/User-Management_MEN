const User = require('../models/User')

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json({ message: 'User created successfully' })
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

const getSingleUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.find({ _id: id })
        res.send(user)
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Server Error' })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedUser) {
            res.json({ "Error": "User Not Found" })
        } else {
            res.json({ updatedUser })
        }
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Server Error' })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await User.findOneAndDelete({ _id: id })
        res.json({ message: `User ${deleted.name} Deleted Successfully` })
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = { createUser, getAllUsers, getSingleUser, deleteUser, updateUser }