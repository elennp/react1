const Router = require("express").Router();
const datosController = require("../controllers/datosControllers");
const passport = require("../config/Passport")
const { ObtenerDatos, ObtenerItinerarios } = datosController
const usersControllers = require("../controllers/usersControllers")
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion, verificarToken } = usersControllers
const validator = require('../controllers/validator')
// const commentControllers= require("../controllers/comentariosControllers")
// const {cargaComentarios,obtenerComentarios,borrarComentario,modificarComentario}=commentControllers

Router.route("/datos")
    .get(ObtenerDatos)


Router.route("/itinerary/:id")
    .get(ObtenerItinerarios)


Router.route("/singup")
    .post(validator, nuevoUsuario)


Router.route("/verify/:uniqueText")
    .get(verifyEmail)

Router.route("/singin")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarSesion)

    // Router.route("/comment")
    // .post(cargaComentarios)
    
    // Router.route("/comment/:id")
    // .get(obtenerComentarios)
    // .delete(borrarComentario)
    // .put(modificarComentario)

Router.route("/auth/signinToken")
    .get(passport.authenticate("jwt", { session: false }), verificarToken)

module.exports = Router