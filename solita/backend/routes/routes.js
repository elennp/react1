const Router = require("express").Router();
const  citiesControllers= require("../controllers/datosControllers")
const { ObtenerDatosCompletos, ObtenerItinerarios } = citiesControllers 
const usersControllers = require("../controllers/usersControllers")
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarCesion } = usersControllers
const validator = require("../controllers/validator")


Router.route("/datos") 
    .get(ObtenerDatosCompletos)

Router.route("/itinerarios/:city")
    .get(ObtenerItinerarios)

Router.route("/cardSignUp")
    .post(validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
    .get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarCesion)

module.exports = Router