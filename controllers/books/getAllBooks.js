const { Book } = require('../../models')

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({})
    console.log(books)
    res.json({
      status: '✔️ Success',
      code: 200,
      books,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllBooks
