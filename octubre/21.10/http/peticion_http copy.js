// https://es.wikipedia.org/wiki/Gnathonemus_petersii

const http = require("https");
const { createWriteStream } = require("fs");


                // la respuesta del servidor es un flujo de lectura (readstream)
http.request({ 

    host: "picsum.photos",
    // port: 443 es el puerto por defecto
    path: "/300"

}, respuesta => {
    // console.log(respuesta.headers)
    // console.log(respuesta.headers.location)

    http.request({ 

        host: "fastly.picsum.photos",
        // port: 443 es el puerto por defecto
        path: respuesta.headers.location.split("photos")[1]
    
    }, respuesta => {
        // console.log(respuesta.headers)
    
        // console.log(respuesta.headers.location)

        let fichero = createWriteStream("./imagen.jpg");

        respuesta.pipe(fichero);

        respuesta.on("end", () => (
            console.log("descarga.lista")
        ))
    
    
       
    
    }).end();

   

}).end();


