const mongoose = require('mongoose')
const routineSchema = new mongoose.Schema({
    name: String,
    description: String,
    daysOfWeek: String,
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    duration: {
        Number
    }

})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine