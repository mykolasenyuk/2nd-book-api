const { Book } = require('../../models')

const dltBook = async (req, res, next) => {
  try {
    const { bookId } = req.params

    const book = { bookId }
    const result = await Book.findById(book.bookId)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: ` Book with ID=${book.bookId} not found`,
      })
      return
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
