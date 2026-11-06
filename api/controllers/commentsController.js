const db = require('../db/queries')

const showComments = async (req, res) => {
    const comments = await db.getComments(Number(req.params.post_id))
    res.json(comments)
}

const addNewComment = async (req, res) => {
    const { content } = req.body
    await db.insertComment(req.user.id, Number(req.params.post_id), content)
    res.status(201).json()
}

module.exports = {
    showComments,
    addNewComment
}