const Routine = require('../models/routines'); 
const Exercise = require('../models/exercises');
const seedData = require('../models/seedRoutines'); 
// RESTful route controller functions for routines
const routinesController = {
    seed: async (req, res)=>{
        await Routine.insertMany(seedData);
        const routines = await Routine.find();
        res.render('routines/index', {
            routines: routines
        })
    },
    index: async (req, res)=>{
        const routines = await Routine.find() 
                                      .populate('exercises')
        const exercises = await Exercise.find();  
        res.render('routines/index', {
            routines: routines,
            exercises: exercises
        })
    },
    new: async (req, res) => {
        try{ 
            const exercises = await Exercise.find(); 
            res.render('routines/new', {
            exercises: exercises
            })
        }catch(err){
            res.send(err)
        }
    },
    create: async (req, res) => {
        try{
            req.body.user = req.user._id;
            req.body.userName = req.user.name;
            req.body.userAvatar = req.user.avatar;
            const newRoutine = await Routine.create(req.body);
            res.redirect('/routines')
        }catch(err){
            console.log(err);
            res.send(err)
        }
    },
    show: async (req, res) => {
        const routine = await Routine.findById(req.params.id)
                                     .populate('exercises')
        const exercises  = await Exercise.find(); 
        res.render('routines/show', {
            routine: routine, 
            exercises: exercises
        })
    },
    delete: async (req, res) => {
        try{
            const deletedRoutine = await Routine.findByIdAndDelete(req.params.id)
            res.redirect('/routines')
        }catch(err){
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try{ 
            const routine = await Routine.findById(req.params.id)
                                         .populate('exercises')
            const exercises = await Exercise.find(); 
            res.render('routines/edit', {
            routine: routine,
            exercises: exercises
            })
        }catch(err){
            res.send(err)
        }
    },
    update: async (req, res) => {
        try{
            await Routine.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    }
}






module.exports = routinesController