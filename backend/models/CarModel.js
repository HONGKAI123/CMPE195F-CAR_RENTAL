const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
     name : {type:String , required: true},
     image : {type:String, required: true},
     rentPerHour : {type:String , required: true},
     bookedTime : [
          {
               
        startTime : {type : String, required: true} ,
        endTime : {type : String, required: true}
               
          }
      ] , 
     carOwner : {type:String , required: true}


})

const carModel = mongoose.model('cars' , carSchema)

module.exports = carModel