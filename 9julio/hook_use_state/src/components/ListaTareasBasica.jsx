

import { useState } from 'react'




export const ListaTareasBasica = () => {

    const datosTareas = ["Tarea 1 ", "Tarea 2 ", "Tarea 3 "]

    const [listaTareasBasica, setListaTareas] = useState([datosTareas]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleAgregarTarea = (e) => {


        // Ccomprobaciones
        if(nuevaTarea.trim() == "" ) {return;  }
        // Si haciendo trim, el input se queda vacío, devolver NADA. Que no haga nada


        // agregar la tarea a ListaDeTareas
        setListaTareas ([...listaTareasBasica, nuevaTarea]);

        // limpiar el input
        setNuevaTarea("");

        // notificar al usuario
        alert("tarea creada")
    }

    return (

        <>
        <h3>Lista de tareas básica</h3>

        <input 
            value = {nuevaTarea}
            onChange={(e) => {
                // console.log(e);
                setNuevaTarea(e.target.value);
                // console.log("CAMBIÉ", e.target.value);
                console.log("[ListaTareasBasica] onChange", e.target.value);
                



            }}
            placeholder="Ingresar tarea"
        />

        <button onClick= {handleAgregarTarea}>
            Crear
        </button>

        <ul>
                {listaTareasBasica.map((tarea, index) =>
                {return (<li key={index}> {tarea}</li>)}) }



            {/* <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li> */}


        </ul>
        

        </>
      );
}