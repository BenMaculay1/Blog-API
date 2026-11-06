const prisma = require('./prisma')

const getPosts = async () => {
    return await prisma.posts.findMany({
        select: { id: true, title: true, content: true, users: { select: { username: true }} }
    })
}

const createUser = async (username, password) => {
    return await prisma.users.create({
        data: { username, password }
    })
}

const getUser = async (username) => {
    return await prisma.users.findUnique({where: {username}})
}

const getComments = async (post_id) => {
    return await prisma.comments.findMany({where: {post_id},
        select: {id: true, user_id: true, content: true}})
}

const insertBlog = async (user_id, title, content) => {
    return await prisma.posts.create({
        data: { user_id, title, content }
    })
}

module.exports = {
    getPosts,
    createUser,
    getUser,
    getComments,
    insertBlog
}