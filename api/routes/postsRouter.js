const { Router } = require('express')
const postsRouter = Router()
const requireAuth = require('../middleware/auth')
const { showPosts, addNewBlogPost} = require('../controllers/postsController')

postsRouter.get('/', showPosts)
postsRouter.post('/new', requireAuth, addNewBlogPost)

module.exports = postsRouter