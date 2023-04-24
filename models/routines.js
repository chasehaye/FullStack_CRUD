const mongoose = require('mongoose');
const Exercise = require('./exercise');

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

const routineSchema = new mongoose.Schema({
    name: String,
    description: String,
    exercise: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }],
})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine