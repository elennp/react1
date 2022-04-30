const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt
const User = require("../models/user")

module.exports = passport.use(new jwtStrategy({

    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY
    
}, (jwt_payload, done) => { done
     console.log(jwt_payload)
    User.findOne({_id:jwt_payload.id})
    .then(user=>{
        
        if (user) {
            return done(null,user) 
        
        }else{
            return done(error,false)
        }
    }).catch(error=>{return done(error,false)})
}))