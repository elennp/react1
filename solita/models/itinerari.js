const mongoose = require("mongoose") 

const itinerarySchema = new mongoose.Schema ({
    city:{type:String,require:true},
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    time:{type:String,require:true},
    img:{type:String,require:true},
    likes:{type:Array},
})

const Itinerary = mongoose.model("itineraries",itinerarySchema)

module.exports = Itinerary;