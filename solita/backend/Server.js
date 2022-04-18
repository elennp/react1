require('dotenv').config()
const express = require('express')
const cors=require("cors")
//  const Router= require("express").Router();  
const Router = require ('./routes/routes')
const app = express()
require('./config/Database')
app.use(express.json())
app.use(cors())
app.use("/api", Router)
app.listen('4000',() => console.log('Servidor Inicializado en Puerto 4000'))