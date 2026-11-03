const prisma = require('./prisma')

const getPosts = async () => {
    return await prisma.posts.findMany({
        select: { id: true, title: true, content: true }
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

module.exports = {
    getPosts,
    createUser,
    getUser
}