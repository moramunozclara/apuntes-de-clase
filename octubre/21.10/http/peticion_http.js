// https://es.wikipedia.org/wiki/Gnathonemus_petersii

const http = require("https");
const { writeFile } = require("fs");


                // la respuesta del servidor es un flujo de lectura (readstream)
http.request({ 

    host: "es.wikipedia.org",
    // port: 443 es el puerto por defecto
    path: "/wiki/Gnathonemus_petersii"

}, respuesta => {
    let html = "";

    respuesta.on("data", datos => {
        html+=datos;
    });

    respuesta.on("end", () => {
        writeFile("./index.html", html, error => {
            console.log("..descarga lista");
        });
    });


}).end();


