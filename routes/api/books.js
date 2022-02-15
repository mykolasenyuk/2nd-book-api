const express = require('express')
const { joiSchema } = require('../../models/books/books')
const { validation, authenticate } = require('../../middlewares')
const { books: ctrl } = require('../../controllers')

const router = express.Router()
const booksValidation = validation(joiSchema)

router.post('/', authenticate, booksValidation, ctrl.addBook)
router.get('/', authenticate, ctrl.getAllBooks)
router.get('/:bookId', authenticate, ctrl.getBookById)
router.put('/:bookId', authenticate, booksValidation, ctrl.editBook)
router.delete('/:bookId', authenticate, ctrl.deleteBook)

module.exports = router
