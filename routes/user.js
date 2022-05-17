const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/count',UserController.count)
router.post('/login', UserController.authenticate)
router.use(UserController.verifyJWT)
router.get('/',UserController.index)
router.get('/:uid',UserController.show)
router.put('/:uid/update', UserController.update)
router.delete('/:uid/delete', UserController.delete)
module.exports = router