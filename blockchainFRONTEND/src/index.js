//import serverexpress, frontend_ejs, url
import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from "./routes/index.js"
// app server
const app = express()
// url ubicacion del las rutas fisicas reales 
const __dirname = dirname(fileURLToPath(import.meta.url))
// establecer la dirección de la carpeta obteniendo su meta url 
app.set('views', join(__dirname, 'views'))
// set archivo fontend ejs
app.set('view engine', 'ejs')
// interfaz de rutas
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

// conexion al servidor localhost
app.listen(3000)
console.log('server is listening on port', 3000)