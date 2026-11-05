const db = require('../db/queries')

const showComments = async (req, res) => {
    const comments = await db.getComments(Number(req.params.post_id))
    res.json(comments)
}

module.exports = {
    showComments
}