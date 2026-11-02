const db = require('../db/queries')

const showPosts = async (req, res) => {
    const posts = await db.getPosts()
    res.render('posts', { posts })
}

module.exports = {
    showPosts
}