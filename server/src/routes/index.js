const Router = require('express')
const router = new Router()
const userRouter = require('./user.routes')
const pageRouter = require('./page.routes')


router.use('/user', userRouter)
router.use('/page', pageRouter)

module.exports = router