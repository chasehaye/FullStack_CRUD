const express = require('express')
const router = express.Router()
const exercisesController = require('../controllers/exercises')

// View all exercises 
router.get('/', exercisesController.index)
// View an exercise 
router.get('/:id', exercisesController.show)
// Seed exercises 
router.get('/seed/1/2/3', exercisesController.seed)

module.exports = router;