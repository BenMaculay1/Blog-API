const prisma = require('./prisma')

const getPosts = async () => {
    return await prisma.posts.findMany()
}

module.exports = {
    getPosts
}