

{let estudiantes = ["Sonia", "Tomás", "Clara"];

function listaEstudiantes() {
    return estudiantes;
}

                    //argumento
function nuevoEstudiante(nombre) {
    estudiantes.push(nombre);
    console.log("estudiante guardado");

}

module.exports = {listaEstudiantes, nuevoEstudiante}

}


// const  = () => {
//     return (  );
// }
 
// export default ;