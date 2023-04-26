const express = require('express')
const router = express.Router()
const routinesController = require('../controllers/routines')
const ensureLoggedIn = require('../controllers/ensureLoggedIn')
// RESTful routes for routines
router.get('/', routinesController.index)
router.get('/new', routinesController.new)
router.post('/', ensureLoggedIn, routinesController.create)
router.get('/:id', routinesController.show)
router.delete('/:id', ensureLoggedIn, routinesController.delete)
router.get('/:id/edit', routinesController.edit)
router.put('/:id', ensureLoggedIn, routinesController.update)
router.get('/seed/1/2/3', routinesController.seed)



module.exports = router;