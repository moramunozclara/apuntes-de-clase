import  express  from "express";

// app / main
const servidor = express();



                            // callback
servidor.use(
    
    //             "/prueba", (peticion, respuesta) => {
    // respuesta.send("lo que sea")
    // }

    express.static("./estaticos")
    //  también podría ser "/hola", seguido de la ruta al fichero, 
    // para que solo accedan si usan el enlaace que tu quieres
);


servidor.get("/color", (peticion, respuesta) => {
    let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256 ));

    respuesta.json({r,g,b});
});


servidor.use((peticion, respuesta) => {
    respuesta.status(404);
    respuesta.send("404 not found")
});

                // puerto
servidor.listen(3000);

