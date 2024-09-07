// VERSIÓN COMMONJS
// const express = require('express');
// const cors = require('cors');

// VERSIÓN ES MODULES
import express from 'express';
import cors from 'cors';



//  importar rutas
import indexRoutes from './routes/index.routes.js'

//   importo variables de configuración

import {URL, PORT} from './config/config.js'

const app = express();

// ---------------------------
//        Middlewares
// ---------------------------

// CORS nos permite acceder a los recursos de este servidor,
// DESDE OTRO servidor
app.use(cors());

// EXPRESS procesa el json body para leerlo con req.body();
app.use(express.json());

app.use("API/v1/", indexRoutes);

// ---------------------------
//        RUTAAS
// ---------------------------

//Rutas (1º la ruta, 2º la función)
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    const landingHTML = `
                        <h1>Bienvenidos a nuestra REST-API</h1>
                        <h2>Mi backend es: <strong>${URL}:${PORT} </h2>
                        `;
    res.send(landingHTML);
});

app.use("/API/v1/", indexRoutes);


app.listen(PORT, () => {
    console.log(`Servidor iniciado en ${URL}:${PORT} `);
});