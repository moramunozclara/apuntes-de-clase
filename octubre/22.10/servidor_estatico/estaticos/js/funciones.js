//CREAR UN SERVIDOR DE FICHEROS ESTÁTICOS
//Si concuerda la peticióon, coon lo que tenemos, devolvérselo. Si no, devolver un 404

const {createServer} = require("http");
const {createReadStream, stat} = require("fs");

function contentType(extension) {
    if(extension == "html") return "text/html";
    if(extension == "css") return "text/css";
    if(extension == "js") return "text/js";
    if(extension == "jpg" || extension == "jpeg") return "image/jpeg";

    //si no es ningunoo de esos casos
    return "text/plain"

};


function servirFichero(respuesta, ruta, tipo, status){

    respuesta.writeHead(status, {"Content-type" : tipo});

    let fichero = createReadStream(ruta);

    fichero.pipe(respuesta);

    fichero.on("end", () => respuesta.end());


};

createServer((peticion, respuesta) => {

    // servirFichero();


    if (peticion.url == "/") {
        servirFichero(respuesta, "./estaticos/index.html", contentType("html"), 200);
        
    } else {
        // servirFichero(respuesta, "./404.html", "", 404);
       let ruta = "./estaticos" + peticion.url;

    //    averiguar si el fichero existe
    //  o realizar el callback
    // callback: recibir el error o el null con su informacion
       stat(ruta, (error, informacion) => {
        if (!error && informacion.isFile()) {
            return servirFichero(respuesta, ruta, contentType(ruta.split(".").pop()), 200)
        }

        servirFichero(respuesta, "./404.html", contentType("html"), 404);
        });     
    }

    // respuesta.write("lo que sea");
    // respuesta.write("el path es" + peticion.url);

    // respuesta.end();

}).listen(4000);



// cambiar color aleatorio

const body = document.querySelector("body");



body.style.backgroundColor = `rgb(${[0,0,0].map(() => Math.floor(Math.random() * 256)).join(",")})`;