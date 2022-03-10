const joi = require ("joi")

const validator = (req,res,next) => {

    console.log.apply(req.body.NuevoUsuario)
    const Schema = joi.object({
        firstName:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"The first name must contain at least 3 (three) characters",
            "string.empty":"First name: the field cannot be empty",
        }),

        lastName:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"The last name must contain at least 3 (three) characters",
            "string.empty":"Last name: the field cannot be empty",
        }),

        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"Invalid e-mail format",
            "string.empty":"E-mail: the field cannot be empty",
        }),

        password:joi.string().max(30).min(6).trim().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/).required().messages({
            "string.empty":"Password: the field cannot be empty",
            "string.pattern.base":"The password must contain at least one uppercase letter, one lowercase letter and one number",
            "string.min":"The password must contain at least 6 (six) characters",
        }),

    })

    const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:true})

    if (validation.error) {
        return res.json({success:"falseVAL",response:validation})
    }

    next()

}

module.exports = validator