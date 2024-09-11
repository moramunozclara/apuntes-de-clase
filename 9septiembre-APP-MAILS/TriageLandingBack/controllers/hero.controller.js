// Define tus rutas aquí, importar mis exportaciones de mockdata (incluir .js)
import {hero} from '../data/mockData.js';

import {getLastId} from '../utils/utils.js' ;
   
// respuesta genérica para todos mis controllers

const responseAPI = {
    data: [],
    msg: "",
    status: "ok" 
}

   // GET /hero
    export const getHero = (req, res) => {


        try {

            const statusCode = hero.length ? 200 : 204;
            
        } catch (error) {
            
        }
        // STATUS 200 = SUCCESSFUL REQUEST
        res.status(200).json(hero);
    };

    