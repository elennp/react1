const mongoose = require("mongoose"); 
// import { Link, Link as Linkrouter } from 'react-router-dom';


const citiesSchema = new mongoose.Schema ({
    name:{type:String,require:true},
    country:{type:String,require:true},
    description:{type:String,require:true},
    currency:{type:String,require:true},
    language:{type:String,require:true},
    continents:{type:String,require:true},
    region:{type:String,require:true},
    beststation:{type:String,require:true},
    image:{type:String,require:true},
})

const City = mongoose.model("cities",citiesSchema)

module.exports = City;
