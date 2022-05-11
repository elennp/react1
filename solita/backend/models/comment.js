 const mongoose = require ("mongoose")

const commentsSchema = new mongoose.Schema({

    itinerario:{type:mongoose.Types.ObjectId,ref:"itineraries", required:true},
    user:{type:mongoose.Types.ObjectId,ref:"users", required:true},
    comment:{type:String, required: true},
   
})

const Comments= mongoose.model("comments", commentsSchema)

module.exports = Comments ;
