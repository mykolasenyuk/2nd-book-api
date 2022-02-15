const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/api/auth')
const booksRouter = require('./routes/api/books')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/', authRouter)
app.use('/books',booksRouter )

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const {
    status = 500,
    message = 'Server error',
  } = err /* default error (4args) */
  res.status(status).json({ message })
})

module.exports = app
