import { Router } from 'express';
const router = Router();

// Define tus rutas aquí, importar mis exportaciones de mockdata (incluir .js)
import {hero, sections} from '../data/mockData.js';

import {getHero} from '../controllers/hero.controller.js';

// ---------------------------       
//  RUTAS a los controllers (API/v1)
// ---------------------------

// /posts________________________________________________________
    
    // GET /hero
    router.get("/hero", getHero );


    // POST /hero (agregar nuevo hero nuestra base de datos ???????)
    // router.post("/hero", newHero );



export default router;


