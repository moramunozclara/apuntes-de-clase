import express from "express";
import { leerColores, crearColores, borrarColor } from "./db.js";

const servidor = express();
const PORT = 4000;

// Middleware para servir archivos estáticos y procesar JSON en la propiedad body de la petición
servidor.use(express.static("./front"));
servidor.use(express.json());


servidor.get("/colores", async(peticion, respuesta) => {
    try {

        let colores = await leerColores();

        respuesta.json(colores);
        
    } catch(error) {
        
        respuesta.status(500).json({ error: "Error al obtener los colores" });

    }
});

servidor.delete("/borrar", async (peticion, respuesta) => {

    let {id} = peticion.body;

    try {

        let cantidad = await borrarColor(id);

        // await borrarColor(id);
        respuesta.json({resultado : cantidad ? "ok" : "ko"});


    } catch (error) {
        respuesta.status(500);
        
        respuesta.json({ error: "Error al borrar el color" });
    }
});

servidor.post("/crear", async(peticion, respuesta) => {
    let {r,g,b} = peticion.body;

    try {
        let id = await crearColores(r,g,b);

        respuesta.json({id})
        
    } catch (error) {

        console.error("Error al crear color:", error);
        respuesta.status(500).json({ error: "Error al crear el color" });
        
    }
});

servidor.post("/crear", async (req, res) => {
    try {
        const { r, g, b } = req.body;
        const nuevoColor = await crearColores(r, g, b);
        res.json(nuevoColor);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el color" });
    }
});

// Iniciar el servidor // Aviso en consola

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

