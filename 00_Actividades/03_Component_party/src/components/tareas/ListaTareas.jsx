
import Tarea from "./Tarea";

const ListaTareas = ({listaTareas}) => {

    console.log(listaTareas);

    return (
        // Creamos un contenedor  y le creamos la clase .Card para darle un estilo en nuestro CSS
        // Dentro de este contenedor se mosntrará toda la info de tareas, por eso va dentro
        <div className="Card">

            {/* Encabezado de la lista */}
            <h2>Lista de tareas</h2>
            

            {listaTareas.map(element => {
                const {id, nombreTarea, isCompletada} = element;
                return (
                    // Devuelve el componente Tarea.jsx
                    <Tarea
                    // Devuelve la propiedad (sin corchetes), en su {variable} Aprender, Leer...)
                    // key={id} es la forma en que React identifica cada componente individualmente
                    key={id} 
                    nombreTarea={nombreTarea} 
                    isCompletada={isCompletada}    
                    />
                )
            })}

        </div>
    )
}
export default ListaTareas;