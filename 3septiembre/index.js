// VERSIÓN COMMONJS
// const express = require('express');
// const cors = require('cors');

// VERSIÓN ES MODULES
import express from 'express';
import cors from 'cors';

// importar mis posts y comments de prueba (incluir .js)
import {publicaciones, comments, users, photos} from './data/mockData.js';

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

    // ----> GET /post/:id (obtener una publicacion específica) <-----------------------
    app.get("/publicaciones/:id", (req, res) => {
        const postId = parseInt(req.params.id, 10); // Obtener el id de los parámetros de la URL
        const post = publicaciones.find((publicacion) => publicacion.id === postId); // Buscar el post por id

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: "Publicación no encontrada" });
        }
    });

    //  ---->GET /post/:id/comments (obtener comentarios de una publicacion específica)
        app.get("/publicaciones/:id/comments", (req, res) => {
            const postId = parseInt(req.params.id, 10); // Obtener el id de los parámetros de la URL
            const postComments = comments.filter((comentario) => comentario.postId === postId); // Filtrar comentarios por postId

            if (postComments.length > 0) {
                res.json(postComments);
            } else {
                res.status(404).json({ message: "Todavía no hay comentarios" });
            }
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


// /photos________________________________________________________
    
    // GET /photos
    app.get("/photos", (req, res) => {
        res.json(photos);
    });

    // POST /photos
    app.post("/photos", (req, res) => {

        const lastId = getLastId(photos);

        const newPhoto = {
            id: lastId + 1,
            albumId: 1,
            title: req.body.titulo,
            // url: "",
            // thumbnailUrl: "https://via.placeholder.com/150/92c952"

        };

        photos.push(newPhoto);

        res.json(newPhoto);
    } )


// /users________________________________________________________
    
    // GET /users
    app.get("/users", (req, res) => {
        res.json(users);
    });

    // POST /users
    app.post("/users", (req, res) => {

        const lastId = getLastId(users);

        const newUser = {
            id: lastId + 1,
            name: req.body.nombre,
            username:  req.body.usuario,
            email: req.body.correo
        };

        users.push(newUser);

        res.json(newUser);
    } )



app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT} `);
});