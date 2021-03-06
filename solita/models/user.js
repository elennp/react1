const mongoose = require("mongoose") 

const usersSchema = new mongoose.Schema({
    name: { type: String, require: true },
    
    email: { type: String, require: true },
    password: { type: String, require: true },
     uniqueText: { type: String, require: true },
   
     emailVerificado:{type:Boolean,require:true},
     connected: {type: Boolean, require: true},
     google: {type: Boolean, required:true},
    })

const User = mongoose.model("users", usersSchema)

module.exports = User;