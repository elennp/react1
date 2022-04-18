 const joi = require ("joi")
 const { nuevoUsuario } = require("./usersControllers")

 const validator = (req,res,next)=>{ 
     console.log(req.body.nuevoUsuario) 

     const Shema =joi.object({
         name:joi.string().max(15).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            'string.min':'el nombre debe contener minimo 3 caracteres',
            'string.empty':'el campo no puede estar vacio'
                        
         }),
         email:joi.string().email({minDomainSegments:2}).required().messages({
             'string.email':'correo no valido',
         }),

         password:joi.string().max(20).min(6).trim().pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
             "string.pattern.base":"La contraseña debe contener minimo una mayuscula, una minuscula y un numero",
             "string.min":"La contraseña debe contener minimo 6 caracteres alfanumericos",
             "string.max":"La contraseña no debe exceder de 30 caracteres alfanumericos"
          }),
          

     });
     const validation = Shema.validate(req.body.NuevoUsuario,{abortEarly:false})
     if(validation.error){
         return res.json({success:'falseVAL',response:validation})
     }
     next()

 }
 module.exports = validator

