import express from "express";
import { leerColores, crearColores, borrarColor } from "./db.js";

const servidor = express();
const PORT = 4000;

                                                           // TUTORÍA: es lo mismo que hacer fetch?
servidor.get("/colores", async(peticion, respuesta) => {
    try {

        let colores = await leerColores();

        respuesta.json(colores);
        
    } catch (error) {
        
        respuesta.status(500);

        respuesta.json(error);

    }
});


// Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});