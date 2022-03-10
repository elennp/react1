require('dotenv').config()
const express = require('express')   //equivalente al import de react pero en node
const app = express()
require('./config/Databasic')
app.use(express.json())

app.listen('4000',() => console.log('Servidor Inicializado en Puerto 4000'))