const signup = require('./signup')
const login = require('./login')
const getAllUsers = require('./getAllUsers')
const getUserById = require('./getUserById')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
// const updateBalance = require('./updateBalance')
// const current = require('./current')
// const getUserbyEmail = require('./getUserbyEmail')
// const { googleAuth, googleRedirect } = require('./googleAuth')
// const getBalance = require('./getBalance')

module.exports = {
  signup,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  //   logout,
  //   updateBalance,
  //   current,
  //   getUserbyEmail,
  //   googleAuth,
  //   googleRedirect,
  //   getBalance
}
