import { useState } from "react";


const ListaTareasBasica = () => {

    const [tareas, setTarea] = useState("No hay tareas");

    return ( 
        <div className="Card CardEncendido">
            <p>Crea un componente que permita añadir tareas a una lista y mostrarlas.
                </p>

                <input type="text" />
                <button
                onClick={() => {setTarea}}>
                    Añadir tarea
                    </button>

                <button>
                    Borrar lista
                    </button>
            
        </div>
     );
}
 
export default ListaTareasBasica;