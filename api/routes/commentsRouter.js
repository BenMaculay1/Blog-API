const { Router } = require('express')
const {showComments, addNewComment} = require("../controllers/commentsController");
const requireAuth = require('../middleware/auth')
const commentsRouter = Router()

commentsRouter.get('/:post_id/comments', showComments)
commentsRouter.post('/:post_id/comments/new', requireAuth, addNewComment)

module.exports = commentsRouter