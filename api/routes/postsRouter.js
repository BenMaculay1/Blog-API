const { Router } = require('express')
const postsRouter = Router()
const { showPosts } = require('../controllers/postsController')
postsRouter.get('/', showPosts)

module.exports = postsRouter