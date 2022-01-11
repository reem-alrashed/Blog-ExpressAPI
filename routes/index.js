const router = require('express').Router(),
UserRoutes = require('./user'),
PostRoutes = require('./post'), 
IndexController = require('../controllers/index')

router.get('/', IndexController.index)
router.use('/users',UserRoutes)
router.use('/posts',PostRoutes)

module.exports = router
