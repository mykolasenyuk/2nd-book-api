const { User } = require('../../models')

const updateBalance = async (req, res) => {
  try {
    const { _id } = req.user

    const { name, email, password, role } = req.body

    const user = await User.findByIdAndUpdate(
      _id,
      { name, email, password, role },
      {
        new: true,
      },
    )

    res.json({
      status: `User ${user.name} updated`,
      code: 200,
      user,
    })
    // console.log(_id)
  } catch (error) {
    res.status(404).json(error)
  }
}

module.exports = updateBalance
