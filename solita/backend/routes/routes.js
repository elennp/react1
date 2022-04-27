const Router = require("express").Router();
const datosController = require("../controllers/datosControllers");

const { ObtenerDatos, ObtenerItinerarios } = datosController
const usersControllers = require("../controllers/usersControllers")
const { nuevoUsuario, verifyEmail,accesoUsuario,cerrarSesion} = usersControllers
const validator = require('../controllers/validator')


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

module.exports = Router