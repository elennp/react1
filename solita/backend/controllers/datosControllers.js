const Cities = require("../models/cities.js")

const Itinerary = require("../models/itinerari.js")

const datosController = 
{
    ObtenerDatos: async (req, res) => {
        let cities;
        let error = null
        try {

            cities = await Cities.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { cities },
            success: error ? false : true,
            error: error

        })
    },

       
     ObtenerItinerarios : async (req, res) => {
      const id= req.params.id 
         
          let itinerary
           let itinerar
           console.log(req.params)
             const city = req.params.city
          let error = null
        
          try {
             itineraryCity = await Cities.findOne({_id:id})
              console.log(itinerary)
                itinerar= await Itinerary.find({city:itineraryCity.name})
                console.log(itinerar)

          } catch (err) {
               error = err
              console.log(error)

          }

          res.json({
              response: error ? "ERROR" : { itinerary,itinerar },
              success: error ? false : true,
              error: error
          })


     }
  }

    module.exports = datosController
