const express = require('express')
const { users: ctrl } = require('../../controllers')
const { joiSchema } = require('../../models/user/user')
const { validation, authenticate } = require('../../middlewares')

const router = express.Router()
const userValidation = validation(joiSchema)

router.get('/users', authenticate, ctrl.getAllUsers)
router.get('/users/:id', authenticate, ctrl.getUserById)
router.put('/users/:id', authenticate, userValidation, ctrl.updateUser)
router.delete('/users/:id', authenticate, ctrl.deleteUser)

module.exports = router
