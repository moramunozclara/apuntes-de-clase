// const fs = require("fs/promise");
import { error } from "console";
import {readFile} from "fs/promises"; //desestructuramos


// console.log(fs);

// readFile("./prueba.txt", (error, contenido) => {

//     if(error) { 
//         return console.log("Ocurrió un error");
//     }
//     console.log(contenido.toString()); // cualquier contenido que sean caracteres, se puede convertir a string

// });

// readFile("./prueba.txt")
//     .then(contenido => console.log(contenido))
//     .catch(error => console.log(error));

try {
    let contenido = await readFile("./prueba.txt");

    console.log(contenido);
}

catch(error) {
    console.log("...tuvimos un error")
}

// readFile("./pruebaQueDaraErrorPorqueElFicheroNoExiste.txt", (error, contenido) => {
//     if(error) { 
//         return console.log("Ocurrió un error");
//     }
//     console.log(contenido.toString()); // cualquier contenido que sean caracteres, se puede convertir a string
// });



// cd carpeta de este archivo
// node leer