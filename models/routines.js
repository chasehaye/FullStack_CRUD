const mongoose = require('mongoose');
const Exercise = require('./exercises');

const routineSchema = new mongoose.Schema({
    name: String,
    description: String,
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String

})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine; 