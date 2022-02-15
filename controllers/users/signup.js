const { User } = require('../../models')
const { Conflict } = require('http-errors')

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    const user = await User.findOne({ email })

    if (user) {
      throw new Conflict('Already register')
    }
    //    if(role==="user" || role==="admin")
    const newUser = new User({ name, email, role })
    console.log(newUser)
    newUser.setPassword(password)
    await newUser.save()

    res.status(201).json({
      status: 'success',
      code: 201,
      message: `✔️ Success ${newUser.name} register`,
      data: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        token: newUser.token,
        role: newUser.role,
      },
    })
  } catch (error) {
    res.status(409).json(error)
  }
}
module.exports = signup
