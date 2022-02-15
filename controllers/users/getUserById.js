const { User } = require('../../models')
const { NotFound, Forbidden } = require('http-errors')

const getUserById = async (req, res, next) => {
  try {
    const { _id } = req.user
    const user = await User.findById(_id)

    if (user.role !== 'admin') {
      throw new Forbidden(`You don't have access`)
    }

    const { id } = req.params
    const userId = { id }

    const result = await User.findById(userId.id)

    if (!result) {
      throw new NotFound(`User with ID=${userId.id} not found`)
    }

    res.json({
      status: `✔️ Success user witn ID=${userId.id} finded`,
      code: 200,
      result,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getUserById
