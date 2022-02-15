const { Book } = require('../../models')
const { User } = require('../../models')
const { NotFound, Forbidden } = require('http-errors')

const deleteBook = async (req, res, next) => {
  try {
    const { bookId } = req.params

    const book = { bookId }

    const { _id } = req.user
    const user = await User.findById(_id)
    if (user.role !== 'admin') {
      throw new Forbidden(` You can't add book`)
    }

    const result = await Book.findByIdAndDelete(book.bookId)
    if (!result) {
      throw new NotFound(`Book with ID=${book.bookId} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: ' ✔️ Book deleted',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = deleteBook
