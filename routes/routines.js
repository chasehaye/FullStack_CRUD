const express = require('express')
const router = express.Router()
const routinesController = require('../controllers/routines')
const passport = require('passport');

router.get('/auth/google', routinesController.login)
router.get('/oauth2callback', routinesController.callBack)
router.get('/logout', routinesController.logout)

router.get('/', routinesController.index)
router.get('/new', routinesController.new)
router.post('/', routinesController.create)
router.get('/:id', routinesController.show)
router.delete('/:id', routinesController.delete)
router.get('/:id/edit', routinesController.edit)
router.put('/:id', routinesController.update)

router.get('/seed/1/2/3/4', routinesController.seed)









module.exports = router;