require('dotenv').config()
const express = require('express')
const app = express()
const path = require('node:path')
const postsRouter = require('./routes/postsRouter')

app.use('/posts', postsRouter)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('running')
})