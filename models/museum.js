// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
let museumSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    image: {
        type: String
    }
})

// TODO: Use schema to create model
let modelSchema = new mongoose.Schema({

})


// TODO: Export Museum Model
module.exports = mongoose.model('Museum', museumSchema)
