const { User } = require('../../models')

const getAllUsers = async (req, res, next) => {
  try {
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
