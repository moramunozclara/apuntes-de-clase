// importar mis posts y comments de prueba (incluir .js)
import {publicaciones, comments, users, photos} from '../data/mockData.js';

import {getLastId} from '../utils/utils.js' ;
   
// respuesta genérica para todos mis controllers

const responseAPI = {
    data: [],
    msg: "",
    status: "ok" 
}





   // GET /publicaciones
    export const getAllPosts = (req, res) => {


        try {

            const statusCode = publicaciones.length ? 200 : 204;
            
            
        } catch (error) {
            
        }
        // STATUS 200 = SUCCESSFUL REQUEST
        res.status(200).json(publicaciones);
    };










    // POST /publicaciones (agregar nuevo post a nuestra base de datos)
    export const newPost = (req, res) => {
                    
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

        res.status(201).json(newPost);
    }