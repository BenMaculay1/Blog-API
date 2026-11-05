const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const db = require('../db/queries')

const signUpPost = async (req, res) => {
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.createUser(username, hashedPassword)
    res.status(201).json()
}

const logInPost = async (req, res) => {
    const {username, password} = req.body
    const user = await db.getUser(username)
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password"})
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(401).json({ message: "Invalid username or password"})
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    res.json({ message: "Logged in", token })
}

module.exports = {
    signUpPost,
    logInPost
}