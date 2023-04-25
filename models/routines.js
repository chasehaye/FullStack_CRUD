const mongoose = require('mongoose');
const Exercise = require('./exercises');

const routineSchema = new mongoose.Schema({
    name: String,
    description: String,
    exercise: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }],
})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine; 