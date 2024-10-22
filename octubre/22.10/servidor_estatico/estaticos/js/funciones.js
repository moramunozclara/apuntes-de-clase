const {createServer} = require("http");
const {createReadStream} = require("fs");

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

    servirFichero();


    if (peticion.url == "/") {
        servirFichero(respuesta, "./estaticos/index.html", "html", 200);
        
    } else {
        servirFichero(respuesta, "./404.html", "html", 404);
        
    }

    // respuesta.write("lo que sea");
    // respuesta.write("el path es" + peticion.url);

    // respuesta.end();

}).listen(4000);