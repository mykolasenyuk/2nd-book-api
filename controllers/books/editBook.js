const { Book } = require('../../models')
const { User } = require('../../models')
const { NotFound, Forbidden } = require('http-errors')

const editBook = async (req, res, next) => {
  try {
    const { bookId } = req.params
    const book = { bookId }

    const { _id } = req.user
    const user = await User.findById(_id)
    if (user.role !== 'admin') {
      throw new Forbidden(` You can't add book`)
    }

    const result = await Book.findByIdAndUpdate(book.bookId, req.body, {
      new: true,
    })
    if (!result) {
      throw new NotFound(`Book with ID=${bookId} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: '✔️ Book updated',
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = editBook
