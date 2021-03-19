const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/',UserController.index)
router.get('/:uid',UserController.show)
router.put('/:uid/update',UserController.update)
router.delete('/:uid/delete', UserController.delete)
router.post('/create', UserController.create)
module.exports = router

