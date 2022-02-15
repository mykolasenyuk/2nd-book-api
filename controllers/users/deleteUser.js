const { User } = require('../../models')
const { NotFound, Forbidden } = require('http-errors')

const deleteUser = async (req, res, next) => {
  try {
    const { _id } = req.user
    const user = await User.findById(_id)
    if (user.role !== 'admin') {
      throw new Forbidden(` You don't have access`)
    }

    const { id } = req.params
    const userId = { id }

    const result = await User.findByIdAndDelete(userId.id)
    if (!result) {
      throw new NotFound(`User with ID=${userId.id} not found`)
    }

    res.json({
      status: 'success',
      code: 200,
      message: ' ✔️ User deleted',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = deleteUser
