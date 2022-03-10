const Cities = require("../models/cities.js")

const Itinerary = require("../models/itinerari.js")

const citiesController = {
    ObtenerDatos: async (req, res) => {
        let cities
        let error = null
        try {

            cities = await Cities.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response:error?"ERROR":{cities},
            success:error ? false:true,
            error:error

        })

    },

    ObtenerItinerary:async(req,res)=>{
        let itineraries
        console.log(req.params)
        const city =req.params.city
        let error=null

        try {
            itineraries= await Itinerary.find({city:city})
            
        } catch (err) {
            error=err
            console.log(error)
            
        }

        res.json({
            response:error?"ERROR":{itineraries},
            success:error? false:true,
            error:error
        })

        
    }
    }

module.exports= citiesController
