const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const authMiddleware = require('../midleware/auth.middleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check)


module.exports = router