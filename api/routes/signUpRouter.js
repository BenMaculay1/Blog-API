const { Router } = require('express')
const signUpRouter = Router()
const { signUpPost } = require('../controllers/authController')

signUpRouter.post('/', signUpPost)

module.exports = signUpRouter