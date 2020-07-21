const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a sschema for our database
var PhotoSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date() }
})

// Conver the schema into a model
let Photo = mongoose.model('Photo' , PhotoSchema)

module.exports = Photo