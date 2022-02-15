const { User } = require('../../models')
const { NotFound, Forbidden } = require('http-errors')

const updateBalance = async (req, res) => {
  try {
    const { _id } = req.user

    const user = await User.findById(_id)

    if (user.role !== 'admin') {
      throw new Forbidden(` You don't have access`)
    }
    const { id } = req.params
    const userId = { id }
    const { name, email, password, role } = req.body

    const result = await User.findByIdAndUpdate(
      userId.id,
      { name, email, role },
      {
        new: true,
      },
    )
    if (!result) {
      throw new NotFound(`User not found`)
    }
    result.setPassword(password)
    await result.save()

    res.json({
      status: `User  updated`,
      code: 200,
      result,
    })
  } catch (error) {
    res.status(404).json(error)
  }
}

module.exports = updateBalance
