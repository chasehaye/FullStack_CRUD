const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: String,
    description: String,
    dayOfWeek: String,
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    duration: {
        type: Number
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;