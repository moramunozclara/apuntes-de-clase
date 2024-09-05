import { Router } from "express";

// importar mis posts y comments de prueba (incluir .js)
import {publicaciones, comments, users, photos} from '../data/mockData.js';

// helpers /o/ utilities
import {getLastId} from '../utils/utils.js' ;


const router = Router();

import {getAllPosts, newPost} from '../controllers/posts.controller.js';


// STATUS más utilizados
//  - 200: OK SUCCESS
//  - 201: CREATED     La solicitud  
//  - 204: No content  Éxito pero no hay contenido que devolver
//  - 401: Unauthorized: La solicitud requiere autenticación del usuario ( requiere login de un user)
//  - 403: Forbidden:   El servidor recibió la solicitud, pero se necesitan permisos
//  - 409: Conflict:    No se puede completar debido a un conflicto con el recurso (Ejemplo: se est´creand un recurso que ya existe)

// Error de servidor
//  - 500: Internak server error Error genérico del servidor
//  - 503 Service unavailable:   El servidor no está disponible para manejar la solicitud







// ---------------------------       
//        RUTAS (API/v1)
// ---------------------------



// /posts________________________________________________________
    
    // GET /publicaciones
    router.get("/publicaciones", getAllPosts );

    // ----> GET /post/:id (obtener una publicacion específica) <-----------------------
    router.get("/publicaciones/:id", (req, res) => {
        const postId = parseInt(req.params.id, 10); // Obtener el id de los parámetros de la URL
        const post = publicaciones.find((publicacion) => publicacion.id === postId); // Buscar el post por id

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Publicación no encontrada" });
        }
    });

    //  ---->GET /post/:id/comments (obtener comentarios de una publicacion específica)
        router.get("/publicaciones/:id/comments", (req, res) => {
            const postId = parseInt(req.params.id, 10); // Obtener el id de los parámetros de la URL
            const postComments = comments.filter((comentario) => comentario.postId === postId); // Filtrar comentarios por postId

            if (postComments.length > 0) {
                res.json(postComments);
            } else {
                res.status(404).json({ message: "Todavía no hay comentarios" });
            }
        });




    // POST /publicaciones (agregar nuevo post a nuestra base de datos)
    router.post("/publicaciones", newPost );



// /comments________________________________________________________
    
    // GET /comments
    router.get("/comments", (req, res) => {
        res.json(comments);
    });

    // POST /comments
    router.post("/comments", (req, res) => {

        const lastId = getLastId(comments);

        const newComment = {
            id: lastId + 1,
            postId: 1,
            name: req.body.titulo,
            body:  req.body.contenido
        };

        comments.push(newComment);

        res.status(201).json(newComment);
    } )


// /photos________________________________________________________
    
    // GET /photos
    router.get("/photos", (req, res) => {
        res.json(photos);
    });

    // POST /photos
    router.post("/photos", (req, res) => {

        const lastId = getLastId(photos);

        const newPhoto = {
            id: lastId + 1,
            albumId: 1,
            title: req.body.titulo,
            // url: "",
            // thumbnailUrl: "https://via.placeholder.com/150/92c952"

        };

        photos.push(newPhoto);

        res.status(201).json(newPhoto);
    } )


// /users________________________________________________________
    
    // GET /users
    router.get("/users", (req, res) => {
        res.json(users);
    });

    // POST /users
    router.post("/users", (req, res) => {

        const lastId = getLastId(users);

        const newUser = {
            id: lastId + 1,
            name: req.body.nombre,
            username:  req.body.usuario,
            email: req.body.correo
        };

        users.push(newUser);

        res.status(201).json(newUser);
    } )




export default router;