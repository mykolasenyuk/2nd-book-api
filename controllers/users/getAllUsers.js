const { User } = require('../../models')
const { Forbidden } = require('http-errors')

const getAllUsers = async (req, res, next) => {
  try {
    const { _id } = req.user
    const user = await User.findById(_id)
    if (user.role !== 'admin') {
      throw new Forbidden(` You don't have access`)
    }

    const users = await User.find({})
    res.json({
      status: '✔️ Success',
      code: 200,
      users,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllUsers
