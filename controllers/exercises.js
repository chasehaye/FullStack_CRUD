const Routine = require('../models/routines'); 
const Exercise = require('../models/exercises');
const seedData = require('../models/seedExercises'); 

const exercisesController = {
    seed: async (req, res)=>{
        await Exercise.insertMany(seedData);
        const exercises = await Exercise.find();
        res.render('exercises/index', {
            exercises: exercises
        })
    },
    index: async (req, res)=>{
        const exercises = await Exercise.find();   
        res.render('exercises/index', {
            exercises: exercises
        })
    },
    show: async (req, res) => {
        const exercise = await Exercise.findById(req.params.id)
        res.render('exercises/show', {
            exercise: exercise
        })
    }
}


module.exports = exercisesController