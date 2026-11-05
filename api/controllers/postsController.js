const db = require('../db/queries')

const showPosts = async (req, res) => {
    const posts = await db.getPosts()
    res.json(posts)
}

module.exports = {
    showPosts
}