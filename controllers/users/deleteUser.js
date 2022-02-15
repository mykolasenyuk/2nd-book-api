const { User } = require('../../models')

const deleteUser = async (req, res, next) => {
  try {
    const { _id } = req.user
    const { id } = req.params
    const user = { id }
    console.log(id)
    const result = await User.findByIdAndDelete(user.id)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `User with ID=${user.id} not found`,
      })
      return
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
