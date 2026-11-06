const db = require('../db/queries')

const showPosts = async (req, res) => {
    const posts = await db.getPosts()
    res.json(posts)
}

const addNewBlogPost = async (req, res) => {
    const { title, content } = req.body
    await db.insertBlog(req.user.id, title, content)
    res.status(201).json()
}

module.exports = {
    showPosts,
    addNewBlogPost
}