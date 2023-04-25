const express = require('express')
const router = express.Router()
const routinesController = require('../controllers/routines')

router.get('/', routinesController.index)
router.get('/new', routinesController.new)
router.post('/', routinesController.create)
router.get('/:id', routinesController.show)
router.delete('/:id', routinesController.delete)
router.get('/:id/edit', routinesController.edit)
router.put('/:id', routinesController.update)
router.get('/seed/1/2/3', routinesController.seed)

module.exports = router;