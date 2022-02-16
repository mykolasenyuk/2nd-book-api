const { Book } = require('../../models')
const { User } = require('../../models')
const { Conflict, Forbidden } = require('http-errors')

const addBook = async (req, res, next) => {
  try {
    const { name } = req.body

    const { _id } = req.user
    const user = await User.findById(_id)
    if (user.role !== 'admin') {
      throw new Forbidden(` You can't add book`)
    }

    const category = await Book.findOne({ name })
    if (category) {
      throw new Conflict(`Book already exist`)
    }

    const newBook = { ...req.body }
    const result = await Book.create(newBook)
    res.status(201).json({
      status: 'sucess',
      code: 201,
      message: `Book '${req.body.name}' added`,
      data: {
        result,
      },
    })
  } catch (error) {
    res.status(404).json(error)
  }
}
module.exports = addBook
