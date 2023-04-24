const Routine = require('../models/routines')
const Exercise = require('../models/exercise');
const seedData = require('../models/seedExercise')









const routinesController = {
    seed: async (req, res)=>{
        Exercise.insertMany(seedData);
        res.render('routines/index')
    },
    index: async (req, res)=>{
        const routines = await Routine.find();   
        res.render('routines/index', {
            routines: routines
        })
    },
    new: (req, res) => {
        res.render('routines/new')
    },
    create: async (req, res) => {
        const newRoutine = await Routine.create(req.body);
        res.redirect('/routines')
    },
    show: async (req, res) => {
        const routines = await Routine.findById(req.params.id)
        res.render('routines/show', {
            routines: routines
        })
    },
    delete: async (req, res) => {
        const deletedRoutine = await Routine.findByIdAndDelete(req.params.id)
        res.redirect('/routines')
    },
    edit: async (req, red) => {
        const routines = await Routine.findById(req.params.id)
        res.render('routines/edit', {
        routines: routines
        })
    }
}






module.exports = routinesController