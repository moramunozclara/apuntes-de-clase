import postgres from "postgres";


( async () => {

    // 1º creo conexion
    const conexion = postgres({
        host : "localhost",
        port: 5432,
        database: "colores",
        user: "postgres",
        password: "1234567890"

    });
    // 2º hago consulta. tagged function.

    let colores = [];

    for(let i=0; i<5; i++) {
        let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));
        // CREARÁ EL REGISTRO Y RETORNARÁ EL id
        let [{id}] = await conexion `INSERT INTO rgb (r,g,b) VALUES (${r},${g},${b}) RETURNING id`;
        colores.push(id);
    }

    // let colores = await conexion `SELECT * FROM rgb`;

    // 3º cierro conexión
    conexion.end();

    console.log(colores)
})();
