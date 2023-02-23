const Router = require('express')
const router = new Router()
const pageController = require('../controller/page.controller')
const authMiddleware = require('../midleware/auth.middleware')


router.post('/',authMiddleware, pageController.create)
router.get('/',authMiddleware, pageController.getAll)


module.exports = router