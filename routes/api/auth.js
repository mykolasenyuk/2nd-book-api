const express = require('express')
const { users: ctrl } = require('../../controllers')
const { joiSchema } = require('../../models/user/user')
const { validation, authenticate } = require('../../middlewares')
// const { books: ctrlBook } = require('../../controllers')

const router = express.Router()
const userValidation = validation(joiSchema)

router.post('/signup', userValidation, ctrl.signup)
router.post('/login', userValidation, ctrl.login)
router.get('/users', ctrl.getAllUsers)
router.get('/users/:id', ctrl.getUserById)
router.put('/users/:id', authenticate, userValidation, ctrl.updateUser)
router.delete('/users/:id', authenticate, ctrl.deleteUser)

// router.post('./books',ctrlBook.)
// router.patch('/user', authenticate, ctrl.updateBalance)
// router.get('/user/current', authenticate, ctrl.current)
// router.get('/user/balance', authenticate, ctrl.getBalance)
// router.get('/user/:useremail', ctrl.getUserbyEmail)

module.exports = router
