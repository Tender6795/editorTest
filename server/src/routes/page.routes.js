const Router = require('express')
const router = new Router()
const pageController = require('../controller/page.controller')

router.post('/', pageController.create)
router.get('/', pageController.getAll)


module.exports = router