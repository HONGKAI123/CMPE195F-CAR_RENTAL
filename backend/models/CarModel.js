const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
     name : {type:String , required: true},
     image : {type:String, required: true},
     rentPerHour : {type:String , required: true},


})

const carModel = mongoose.model('car' , carSchema)

module.exports = carModel