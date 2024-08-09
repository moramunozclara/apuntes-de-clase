

//  la constante Tarea está hecha para desestructurar y recibir individualmente 
//  los props de su padre ListaTareas
const Tarea = ({nombreTarea, isCompletada}) => {

    return (

        // Tarea nos devuelve un div con ttexto y la llamada a las propiedades
        <div>
            <h3>Tu tarea es: {nombreTarea}</h3>

            {/* si isCompletada es true, poner completada, si es false poner Pendiente */}
            <p>Estado: <b>  {isCompletada ? "Completada" : "Pendiente"}   </b>   </p>

        </div>
    )
}

export default Tarea;