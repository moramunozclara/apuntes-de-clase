// VERSIÓN COMMONJS
// const express = require('express');
// const cors = require('cors');

// VERSIÓN ES MODULES
import express from 'express';
import cors from 'cors';

// importar mis posts y comments de prueba (incluir .js)
import {publicaciones, comments} from './data/mockData.js';

import {getLastId} from './utils/utils.js' ;


const app = express();
const PORT = 3000;


// CORS nos permite acceder a los recursos de este servidor,
// desde otro servidor
app.use(cors());

// EXPRESS procesa el json body para leerlo con req.body();
app.use(express.json());



//Rutas (1º la ruta, 2º la función)
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    const landingHTML = `
                        <h1>Bienvenidos a nuestra REST-API</h1>
                        `;
    res.send(landingHTML);
});

// /posts________________________________________________________
    
    // GET /publicaciones
    app.get("/publicaciones", (req, res) => {
        res.json(publicaciones);
    });
    // POST /publicaciones (agregar nuevo post a nuestra base de datos)
    app.post("/publicaciones", 
        // () => {} funcion flecha
            (req, res) => {
                
                // const newPost = {
                //     id: 101,
                //     userId: 1,
                //     title: "este es el nuevo post",
                //     body: "Lorem ipsummmmmmmmmmmmm"
                // }

                // OBTENER EL ÚLTIMO ID 
                const lastId = getLastId(publicaciones);

                const newPost={
                    id: lastId+ 1,
                    userId: 1,
                    title: req.body.titulo,
                    body:  req.body.contenido
                };
                
                publicaciones.push(newPost);

                res.json(newPost);
            });



// /comments________________________________________________________
    
    // GET /comments
    app.get("/comments", (req, res) => {
        res.json(comments);
    });

    // POST /comments
    app.post("/comments", (req, res) => {

        const lastId = getLastId(comments);

        const newComment = {
            id: lastId + 1,
            postId: 1,
            name: req.body.titulo,
            body:  req.body.contenido
        };

        comments.push(newComment);

        res.json(newComment);
    } )



app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT} `);
});