const nodemailer = require('nodemailer')
const crypto = require('crypto')
const User = require('../models/user.js')
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const { response } = require('express')

async function sendEmail(email,uniqueText){

    const transporter = nodemailer.createTransport({
     host:'smtp.gmail.com',
     port: 465,
     secure: true,
     auth:{
         user:'probandoestomytinerario@gmail.com',
         pass:process.env.NODEMAILER
     }

    })

    const sender= "probandoestomytinerario@gmail.com"
    const mailOptions={
        from:sender,
        to:email,
        subJect:'user verification',
        html:`Presionar <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`
    }
    await transporter.sendMail(mailOptions,function(error,response){
        if(error){
            console.log(error)
        } else{
            console.log('mensaje enviado')
        }
    })
}




const usersControllers = {
    verifyEmail: async (req,res)=>{
      const{uniqueText}=req.params
      const user= await User.findOne({uniqueText:uniqueText})
      if (user) {
          user.emailVerificado=true
          await user.save()
          res.redirect("http://localhost:3000/Form")

      }else{
          res.json({success:false,response:"su email no se a podido verificar"})
      }
    },
    nuevoUsuario: async (req, res) => {

        const { name,email, password } = req.body.NuevoUsuario
           console.log(req.body)
        try {
            const UsuarioExiste = await User.findOne({ name })
            if (UsuarioExiste) {
                res.json({ success: 'falseUE', response: "El usuario que intenta registrar ya existe te invitamos a realizar SingIn" })
            }
            else {
                const emailVerificado =false
                const uniqueText= crypto.randomBytes(15).toString('hex')
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    name,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    
                })
                if (!emailVerificado){
                    await NewUser.save()
                    await sendEmail(email,uniqueText)
                    res.json({ success: 'trueUE', response: "hemos enviado un correo electronico para verificar su email" })

               }

            }
            
        }
        catch (error) { res.json({ success: 'falseUE', response: null, error: error }) }

    },
     accesoUsuario:async (req,res) =>{
        const{email,password} = req.body.userData

        try{
            const usuario= await User.findOne({email})

            if(!usuario){
                res.json({success:false,from:"controller",error:"El usuario y/o contraseña son incorrectas"})
            }
            else{
                if(usuario.emailVerificado){
                    let passwordCoincide = bcryptjs.compareSync(password,usuario.password)
                    
                    if (passwordCoincide){
                      const token = jwt.sign({...usuario},process.env.SECRETKEY)
                      const datosUser= {
                          name:usuario.name,
                          email:usuario.email,
                      }  
                      await usuario.save()
                      response.json({success:true,from:"controller",response:{token,datosUser}})
                    }
                    else{res.json({success:false,from:"controller",error:"El usuario y/o contraseña son incorrectos"})}
                }
                else{res.json({success:false,from:"controller",error:"Hola por favor verifica tu email para validarlo"})}
            }
        }
        catch(error){console.log(error);res.json({success:false,response:null,error:error})}
    }

}
module.exports = usersControllers;