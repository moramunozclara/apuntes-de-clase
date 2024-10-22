const http = require("http");


http.createServer((peticion, respuesta) => {

    respuesta.writeHead(200, {"Content-type" : "text/html"});
    // respuesta.write("lo que sea");
    respuesta.write("el path es" + peticion.url);

    respuesta.end();

}).listen(4000);