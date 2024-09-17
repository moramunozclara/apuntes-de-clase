// Define tus rutas aquí, importar mis exportaciones de mockdata (incluir .js)
import {features} from '../data/mockData.js';

import {getLastId} from '../utils/utils.js' ;
   
// respuesta genérica para todos mis controllers

const responseAPI = {
    data: [],
    msg: "",
    status: "ok" 
}

   // GET /features
    export const getFeatures = (req, res) => {


        try {

            const statusCode = features.length ? 200 : 204;
 
            // STATUS 200 = SUCCESSFUL REQUEST
            res.status(200).json(features);

        } 
        
        catch (error) {
            next (error);
        }

    };

        app.use((err, req, res, next) => {
            
            console.error('Error en la API', err)

            res.status(500).json({
              status: "error",
              msg: "Error en la API",
              error: err.message
            });
          });

    