import { useState } from "react";


const ListaTareasBasica = () => {

    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para almacenar la nueva tarea


    return ( 
        <div className="Card CardEncendido">
            <p>Crea un componente que permita añadir tareas a una lista y mostrarlas.
                </p>

                <input 
                    value={nuevaTarea} // El valor del input se vincula al estado
                    // Cada vez que el usuario escribe algo, se actualiza el estado
                    onChange={(e) => {          
                        setNuevaTarea(e.target.value);
                        console.log("[ListaTareasBasica] onChange", e.target.value);
                    }}
                    placeholder="Ingresar tarea" // Texto que aparece en el input cuando está vacío
                />


                <button
                    onClick={() => {
                        // si el texto del input no está vacío( !== "" )
                        if (nuevaTarea !== "") {
                            // añadir a las tareas existentes (...tareas), la nuevaTarea
                            setTareas([...tareas, nuevaTarea]);
                            // y después limpiar el input de entrada de tareas
                            setNuevaTarea(""); 
                        }
                    }}>
                    Añadir tarea
                </button>

                <button onClick={() => {setTareas([])}}>
                    Borrar lista
                    </button>

                    <ul>
                        {tareas.map((tarea, index) => (
                            <li key={index}>{tarea}</li>
                        ))}
                        
                    </ul>
            
        </div>
     );
}
 
export default ListaTareasBasica;