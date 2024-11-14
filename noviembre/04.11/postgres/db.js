import postgres from "postgres";

function conectar() {
    // retorna postgress con su objeto de configuración
    return postgres({
        host: "localhost",
        database: "colores",
        user: "postgres",
        password: "1234567890"

    })
}

export function leerColores() {
    // asíncrona porque tenemos que utilizar AWAIT dentro
    return new Promise( async(resolve, reject) => {
        let conexion = conectar();

        try {

            // intentamos leer los colores meidante nuestra conexion a postgres 
            // y seleccionando los campos de la tabla
            let colores = await conexion `SELECT * FROM rgb`;

            conexion.end();
            
            resolve(colores);

        } catch (error) {

            reject({error : "error conectando con la base de datos"})
            
        }
        
    })
}

export function crearColores(r,g,b) {
    // asíncrona porque tenemos que utilizar AWAIT dentro
    return new Promise( async(resolve, reject) => {
        let conexion = conectar();

        try {

            // intentamos leer los colores meidante nuestra conexion a postgres 
            // y seleccionando los campos de la tabla
            let [{id}] = await conexion `INSERT INTO rgb (r,g,b) VALUES (${r},${g},${b}) RETURNING id`;

            conexion.end();
            
            resolve(id);

        } catch (error) {

            reject({error : "error conectando con la base de datos"})
            
        }
        
    })
}

export function borrarColor(id) {
    // asíncrona porque tenemos que utilizar AWAIT dentro
    return new Promise( async(resolve, reject) => {
        let conexion = conectar();

        try {

            // intentamos leer los colores meidante nuestra conexion a postgres 
            // y seleccionando los campos de la tabla
            let {count} = await conexion `DELETE FROM rgb WHERE id = ${id}`;

            conexion.end();
            
            resolve(id);

        } catch (error) {

            reject({error : "error conectando con la base de datos"})
            
        }
        
    })
}



leerColores()
    .then(colores => console.log(colores))
    .catch(error => console.log(error));