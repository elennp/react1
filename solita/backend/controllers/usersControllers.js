const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
// const { response } = require("express")


async function sendEmail(email, uniqueText) {

    const transporter = nodemailer.createTransport({

        host: "smtp.gmail.com", // protocolo de email (MPOP3)
        port: 465,
        secure: true,
        auth: {

            user: "mypruebaconsulta@gmail.com",
            pass: process.env.NODEMAILER
        }

    })

    const sender = "mypruebaconsulta@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "MyTinerary: User e-mail verification",
        html: ` <div style="margin: 8px; padding: 8px; background: #f8cd7c;">
                <h1 style="color: #a0773a; font-family: Dancing Script; font-style: italic; font-size: 80px; text-align: center;">MyTinerary</h1>
                </br>
                <h2 style="color: #6e4c1d; font-size: 30px;text-align: center;">Click <a
                style="color: #f39509; font-style: italic" href=http://localhost:4000/api/verify/${uniqueText}>here</a> to validate your e-mail</h2>
                </br>
                </br>
                <h6 style="color: #a0773a; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>
                <h6 style="color: #a0773a; font-size: 12px;text-align: center;"><i>powered by claudiodmguzman</i> </h6>
                </div>
                `
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) { console.log(error) }
        else { console.log("Message sent") }
    })
}


const usersControllers = {

    verifyEmail: async (req, res) => { //es el controlador que recibe el click del usuario en el email
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/cardSignIn")
        }
        else {
            res.json({ success: false, response: "Your e-mail could not be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { firstName, lastName, email, password } = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
                res.json({ success: "falseUE", response: "The user already exists, perform SignIn" })
            }

            else {
                const uniqueText = crypto.randomBytes(15).toString("hex") //texto randon de 15 caracteres hexadecimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerificado,
                    connected:false,
                })

                if (!emailVerificado) {
                    await NewUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success: "trueUE", response: "We have sent an e-mail to verify your e-mail address" })
                }
            }
        }

        catch (error) { res.json({ success: "falseUE", response: null, error: error }) }
    },

    accesoUsuario: async (req, res) => {

        const { email, password } = req.body.userData

        try {
            const usuario = await User.findOne({ email })

            if (!usuario) {
                res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" })
            }
            else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)

                    if (passwordCoincide) {
                        const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
                        const datosUser = {
                            firstName: usuario.firstName,
                            lastName: usuario.lastName,
                            email: usuario.email,
                        }
                        usuario.connected=true
                        await usuario.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } }) // "logueado" })
                    }
                    else { res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" }) }
                }
                else { res.json({ success: false, from: "controller", error: "verifica tu e-mail para validarte" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }

    },

    cerrarCesion: async (req,res) => {

        const email = req.body.email
        console.log(req.body.email)

        const user = await User.findOne({email})

        user.connected=false

        await user.save()
        res.json({success:true, response:"cesión cerrada"})

    }

}

module.exports = usersControllers