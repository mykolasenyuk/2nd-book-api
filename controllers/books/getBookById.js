const { Book } = require('../../models')
const { NotFound } = require('http-errors')

const dltBook = async (req, res, next) => {
  try {
    const { bookId } = req.params

    const book = { bookId }
    const result = await Book.findById(book.bookId)
    if (!result) {
      throw new NotFound(`Book with ID=${book.bookId} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: ' ✔️ Book finded',
      result,
    })
  } catch (error) {
    next(error)
  }
}
module.exports = dltBook
