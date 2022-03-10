const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const itinerariesSchema = new mongoose.Schema ({
    cityTour:{type:String,require:true},
    nameTour:{type:String,require:true},
    descriptionTour:{type:String,require:true},
    availableLanguages:{type:String,require:true},
    priceTour:{type:String,require:true},
    durationTour:{type:String,require:true},
    imgTour:{type:String,require:true},
})

const Itinerario = mongoose.model("itineraries",itinerariesSchema)

module.exports = Itinerario;