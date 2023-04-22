const Routine = require('../models/routines')


const routinesController = {
    index: async (req, res)=>{
        const routines = await Routine.find();   
        res.render('routines/index', {
            routines: routines
        })
    },
    
    new: (req, res) => {
    res.render('routines/new')
    },

}



module.exports = routinesController