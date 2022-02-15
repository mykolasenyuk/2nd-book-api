const { User } = require('../../models')

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params

    const user = { id }

    const result = await User.findById(user.id)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: ` User with ID=${user.id} not found`,
      })
      return
    }
    res.json({
      status: `✔️ Success user witn ID=${user.id} finded`,
      code: 200,
      result,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getUserById
