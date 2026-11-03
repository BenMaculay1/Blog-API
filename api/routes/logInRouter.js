const { Router } = require('express')
const logInRouter = Router()
const { logInPost } = require('../controllers/authController')

logInRouter.post('/', logInPost)

module.exports = logInRouter