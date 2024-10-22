// import {readFile} from "fs/promises"; //desestructuramos

// process.stdout;

// process.stdout.write("lo que seaaaaaa hjgyukgyufuy");
// process.stdout.write("\tlo que seaaaaaa hjgyukgyufuy");
// process.stdout.write("\nlo que seaaaaaa hjgyukgyufuy");
// process.stdout.write("\nlo que seaaaaaa hjgyukgyufuy");

process.stdout.write("escriba algo\r\n");

                // cuando haya datos, realiza un callback
process.stdin.on("data", datos => {

    console.log(datos.toString().split(""));

    if (datos.toString().trim() == "salir") {

        return process.exit();
        
    } 
    console.log("....siga intentando");
});

process.on("exit", () => console.log("bye, bye"));





// console.log(process)

// try {
//     let contenido = await readFile("./prueba.txt");

//     console.log(contenido);
// }

// catch(error) {
//     console.log("...tuvimos un error")
// }


// // cd carpeta de este archivo
// // node leer