const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const itinerariesSchema = new mongoose.Schema ({
    city:{type:String,require:true},
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    time:{type:String,require:true},
    img:{type:String,require:true},
})

const Itinerario = mongoose.model("itineraries",itinerariesSchema)

module.exports = Itinerario;