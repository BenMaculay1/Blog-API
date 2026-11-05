const { Router } = require('express')
const {showComments} = require("../controllers/commentsController");
const commentsRouter = Router()

commentsRouter.get('/:post_id/comments', showComments)

module.exports = commentsRouter