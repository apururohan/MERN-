const mongoose = require('mongoose')

const schema = mongoose.Schema 

//constructing the required schema
const workoutSchema = new schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    load : {
        type : Number,
        required : true
    }
}, { timestamps : true } )

//creating the model based on above schema
// Applies schema to a certain model and use this model for interacting with the collection

module.exports = mongoose.model('Workout',workoutSchema)
