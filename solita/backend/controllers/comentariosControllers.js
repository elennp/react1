const nodemailer = require("nodemailer")
const crypto = require("crypto")
const Comments = require("../models/comment")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const commentControllers = {

    cargarComentarios: async (req, res) => {

        const { itinerario, mensaje, user } = req.body.dataComents;
        console.log(req.body.dataComents)

        new Comments({

            itinerario: itinerario,
            user: user,
            comment: mensaje
        }).save()

        let  comentario
       
        try {
            
            comentario = await Comments.find({ itinerario: itinerario },{new:true}).populate("user")
            console.log(comentario)
            res.json({ succes: true, response: {comentario }, message:"Your message has been sent"})
        }catch (error) {
            console.log(error)
        }
       

    },
    obtenerComentarios: async (req, res) =>{
        console.log(req.body)
        let id = req.params.id;

        let comentario
        
        try {
            comentario = await Comments.find({ itinerario: id }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response: { comentario } })

    },


    borrarComentario: async (req, res) => {
        let id = req.params.id;

        let comentario

        try {
            comentario = await Comments.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response: { comentario }, message:"su comentario fue borrado" })


    },

    modificarComentario:async(req, res) => {
       
        let id = req.params.id;
        console.log(req.body)
        let newComments= {comment:req.body.data}
        console.log(newComments)
        let comentario

        try {
            comentario = await Comments.findOneAndUpdate({ _id:id},newComments)
        } catch (error) {
            console.log(error)
        }
        res.json({ succes: true, response:{comentario},message:"Su comentario fue modificado "})

    }
}
module.exports = commentControllers;