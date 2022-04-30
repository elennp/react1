const nodemailer = require('nodemailer')
const crypto = require('crypto')
const User = require('../models/user.js')
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")


async function sendEmail(email,uniqueText){
    console.log(email)
    console.log(uniqueText)
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
          res.redirect("http://localhost:3000/form")

      }else{
          res.json({success:false,response:"su email no se a podido verificar"})
      }
    },
    nuevoUsuario: async (req, res) => {

        const { name,email, password,google } = req.body.NuevoUsuario
          
        try {
            const UsuarioExiste = await User.findOne({ email })
            console.log(UsuarioExiste)
            if (UsuarioExiste) {
                
           
             
                if(google){
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    UsuarioExiste.password=passwordHash;
                    UsuarioExiste.emailVerificado=true
                    UsuarioExiste.google=true
                    UsuarioExiste.connected= false
                    UsuarioExiste.save()
                    res.json({success:true,from:"google",response:"Actualizamos tu signin para que lo realices con google"})  
                }
                else{
                  res.json({success:false,from:"signUp",response:"Este email ya esta en uso,realice signin"})  
                
             }
            }
            else{


                const emailVerificado =false
                const uniqueText= crypto.randomBytes(15).toString('hex')
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    name,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    connected:false,
                    
                })

                if(google){
                    NewUser.emailVerificado = true,
                    NewUser.google = true,
                    NewUser.connected = false,
                    await NewUser.save()
                    res.json({success:true,from:"google",response:"felicidades hemos creado tu usuario con google",data:{nuevoUsuario}})
                }
                else {
                    NewUser.emailVerificado = false
                    NewUser.google= false
                    NewUser.connected= false
                    await NewUser.save()
                    await sendEmail(email,uniqueText)
                    res.json({ success:'true', from:"signUp", response: "hemos enviado un correo electronico para verificar su email", data:{nuevoUsuario} })

               }

            }
            
        }
        catch (error) { res.json({ success: 'false', from:'signUp', response: null, error: error }) }

    },
     accesoUsuario: async (req,res) =>{
         console.log(req.body)
        const{email,password} = req.body.userData
     
        try{
            const usuario= await User.findOne({email})
            console.log(usuario)
            if(!usuario){
                res.json({success:false,from:"controller",error:"El usuario y/o contraseña son incorrectas"})
            }
            else{
                if(usuario.emailVerificado){
                    let passwordCoincide = bcryptjs.compareSync(password,usuario.password)
                    
                    if (passwordCoincide){
                     
                     const datosUser = {
                         name:usuario.name,
                         email:usuario.email,
                         id:usuario._id,
                     };
                     
                     
                       
                      await usuario.save();
                      
                   
                      const token = jwt.sign({...datosUser},process.env.SECRETKEY,{expiresIn:60*60*24});
                      res.json( {
                          success: true,
                          from: "controller",
                          
                          response: { token, ...datosUser},message:"Again"+ ""+usuario.name})
                      
                    }
                    else{res.json({success:false,from:"controller",error:"El usuario y/o contraseña son incorrectos"})}
                }
                else{res.json({success:false,from:"controller",error:"Hola por favor verifica tu email para validarlo"})}
            }
        }
        catch(error){console.log(error);res.json({success:false,response:null,error:error})}
    },
    cerrarSesion: async(req,res) => {
        const email= req.body.email
        console.log(req.body.email)
        
        const user = await User.findOne({email})
        

        await user.save()
        res.json({success:true,response:'sesion cerrada'})

    },
     verificarToken: async(req,res)=>{
        
         if (!req.error) {
            res.json({success:true,
                respuesta:{
            name:req.user.name,
            email:req.user.email,
                id:req.user.id,
             },
            response:"Bienvenido " + req.user.firstname}) 
            
         }else{
             res.json({
          success:false,response:"Por favor ingrese nuevamente"
            })
         }
     }
}
module.exports = usersControllers;