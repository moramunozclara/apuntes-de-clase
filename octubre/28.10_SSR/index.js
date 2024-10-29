import  express  from "express";
import {readFile, writeFile} from "fs";

function leerEstudiantes(){
    return new Promise((resolve, reject) => {
        readFile("./data/estudiantes.JSON", (error, contenido) => {
            if (!error) { 
                resolve(JSON.parse(contenido.toString())) }
            else  { reject(console.log("Error leyendo el ficheroo"));
            }

        })
    })
}

// app / main
const servidor = express();


// UNA VEZ CONFIGURADAS LAS VISTAS,EXPRESS BUSCARÁ TODAS LAS PLANTILLAS EN LA CARPETA VIEWS
servidor.set("view engine", "ejs");


servidor.get("/", async (peticion, respuesta) => {
    try {
        let estudiantes = await leerEstudiantes();
        respuesta.render("index", { estudiantes});
        
    } catch (error) {
        respuesta.status(500)
        respuesta.send("Error en el servidor");
        
    };
});


            // RUTA con la que se procesará nuestra VISTA
servidor.get("/ejemplo", (peticion, respuesta) => {

    let nombres = ["René", "Sonia", "Yorbelys"];
    // let nombres = ["René", "<span>Sonia</span>", "Yorbelys"];

    respuesta.render("prueba", {nombres});
});

                // puerto
servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });