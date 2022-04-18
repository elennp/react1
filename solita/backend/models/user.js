const mongoose = require("mongoose") 

const usersSchema = new mongoose.Schema({
    Name: { type: String, require: true },
    // lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
     uniqueText: { type: String, require: true },
    //  confirmPassword: { type: Boolean, require: true },
    // connected: {type: Boolean, require: true},
    emailVerificado:{type:Boolean,require:true}
})

const User = mongoose.model("users", usersSchema)

module.exports = User;