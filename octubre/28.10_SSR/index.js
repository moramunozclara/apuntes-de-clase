import  express  from "express";
import {readFile, writeFile} from "fs";


// [
//     {"id": 1,
//     "nombre": "Julián",
//     "edad": "27",
//     "asignatura": "Full Stack"}
// ]


function leerEstudiantes(){
    return new Promise((resolve, reject) => {
        readFile("./data/estudiantes.JSON", (error, contenido) => {
            if (!error) { 
                resolve(JSON.parse(contenido.toString())) }
            else  { reject(console.log("Error leyendo el ficheroo"));
            }

        })
    })
};

function registrarEstudiante(estudiante) { //nombre, edad son lso datos que se recibira dfel estudiante
    return new Promise( async (resolve) => {
        // writeFile("./data/estudiantes.JSON", (error, contenido) => {
            // if (!error) { 
            //     resolve(JSON.parse(contenido.toString())) }
            // else  { reject(console.log("Error leyendo el ficheroo"));
            // }

        try {

            let estudiantes = await leerEstudiantes();
            
            // registrar un id nuevo por encima del último (un dato serial)
            let id = estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].id + 1 : 1;
            
            estudiantes.push({...estudiante,id});

            //                  dónde  -   qué quiero escribir  -  callback en caso de error
            writeFile("./data/estudiantes.JSON", JSON.stringify(estudiantes), error => {
            // PROBAR ERROR CAMBIANDO LA RUTA AL FICHERO POR UNA INCORRECTA

                if (!error) {

                    resolve({error : false});

                } 

                resolve({error : "Error escribiendo el ficheroo"});
            });

        } catch (error) {

            resolve({error : "Error escribiendo el ficheroo"})

        }

    })
};


// app / main
const servidor = express();

// Configuración: configura el motor de plantillas a EJS
// UNA VEZ CONFIGURADAS LAS VISTAS,EXPRESS BUSCARÁ TODAS LAS PLANTILLAS EN LA CARPETA VIEWS
servidor.set("view engine", "ejs");

                                // cualquier pepticion que lleve url encoded, almacenará la info recibida
servidor.use(express.urlencoded({extended : true}))

servidor.get("/", async (peticion, respuesta) => {
    try {
        let estudiantes = await leerEstudiantes();
        respuesta.render("index", { estudiantes});
        
    } catch (error) {
        respuesta.status(500)
        respuesta.send("Error en el servidor");
        
    };
});



//             // RUTA con la que se procesará nuestra VISTA
// servidor.get("/ejemplo", (peticion, respuesta) => {

//     let nombres = ["René", "Sonia", "Yorbelys"];
//     // let nombres = ["René", "<span>Sonia</span>", "Yorbelys"];

//     respuesta.render("prueba", {nombres});
// });

servidor.post("/registro", async (peticion, respuesta) => {
        // respuesta.send("procesando su peticion");

        // respuesta.send("datos recibidos" + peticion.body);

        let {nombre} = peticion.body;
                                     // entre 20 y 40
        let edad = Math.floor(Math.random() * 21) + 20;
            
        let {error} = await registrarEstudiante({nombre, edad});


    if (!error) {
            // si  no hay error, si todo sale bien , redirigir al inicio
            return respuesta.redirect("/");
    }

    respuesta.status(500);
    respuesta.send(error);

    // // MÉTODO SIN FRAMEWORKS
    //     let body = "";

    //     peticion.on("data", datos => {
    //         // concatenar
    //         body+=datos;
    //     })

    //     peticion.on("end", () => {
    //         // concatenar
    //     respuesta.send(`datos recibidos :${body}`);
    // })

});






function borrarEstudiante(estudiante) { //nombre, edad son lso datos que se recibira dfel estudiante
    return new Promise(async (resolve) => {

        try {

            // usando filter, el array se quedará con los estudiantes que no coinciden con el id
            // usamos leerEstudiantes que ya lo tenemos
            let estudiantes = await leerEstudiantes();

            estudiantes = estudiantes.filter(estudiante => estudiante.id != id);

            writeFile("./data/estudiantes.JSON", JSON.stringify(estudiantes), error => { 
                if (!error) {
                    resolve({error : false})
                }
                resolve({error : "Error sobreescribiendo el fichero"})

            })
            
        } catch (error) {
            resolve({error : "Error leyendo el fichero"})
            
        }


        
    })

};



servidor.get("/borrar/:id", async (peticion, respuesta) => {
            // respuesta.send(`El valor de tal es ${peticion.params.id}`);
            // respuesta.send(`El valor de tal es ${peticion.params.id}`);
        
            let id = Number(peticion.params.id);

            let {error} = await borrarEstudiante(id);

            if(!error) {
                return respuesta.redirect("/");
            }


            respuesta.status(500)
            respuesta.send("Error en el servidor");
        
        });


                // puerto
servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });