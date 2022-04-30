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


     },
     likeDislike: async (req, res) => {
    //     const id = req.params.id;
    //     const user= req.user.id
    
    //     console.log(id)
    //     console.log(user)
    //     let itinerary
    
    //     try {
    //       itinerary = await Itinerary.findOne({ _id: id })
         
          
    //       if (itinerary.likes.includes(user)) {
                                                
    //         Itinerary.findOneAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
    //         .then(response=>res.json({success:true,response:response.likes}))
    //         .catch(error=>console.log(error))
    //       }else{
                                                
    //         Itinerary.findOneAndUpdate({_id:id},{$push:{likes:user}},{new:true})
    //         .then(response=>res.json({success:true,response:response.likes}))
    //         .catch(error=>console.log(error))
    //       }
         
    
    //     } catch (err) {
    //       error = err
    //      res.json({success:false,response:error})
    //     }
       
    //   },
     } 
  }

    module.exports = datosController
