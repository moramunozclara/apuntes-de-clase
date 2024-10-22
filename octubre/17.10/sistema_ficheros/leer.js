const fs = require("fs");

// console.log(fs);

fs.readFile("./prueba.txt", (error, contenido) => {
    console.log(error, contenido); // nos devuelve  el contenido del txt en codigo hexadecimal


});



fs.readFile("./pruebaQueDaraErrorPorqueElFicheroNoExiste.txt", (error, contenido) => {
    if(error) { 
        return console.log("Ocurrió un error");
    }
    console.log(contenido.toString()); // cualquier contenido que sean caracteres, se puede convertir a string


});

// LEER UNA FOTO (Malinterpretará datos porque la info son pixeles y no caracteres)
fs.readFile("./916-100x100.jpg", (error, contenido) => {
    if(error) { 
        return console.log("Ocurrió un error");
    }
    console.log(contenido.toString()); // cualquier contenido que sean caracteres, se puede convertir a string


});


// cd carpeta de este archivo
// node leer