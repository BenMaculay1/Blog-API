const cors = require('cors')
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('node:path')
const postsRouter = require('./routes/postsRouter')
const signUpRouter = require('./routes/signUpRouter')
const logInRouter = require('./routes/logInRouter')
const commentsRouter = require('./routes/commentsRouter')

app.use(express.json())
app.use(cors())

app.use('/posts', postsRouter)
app.use('/signup', signUpRouter)
app.use('/login', logInRouter)
app.use('/posts', commentsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('running')
})