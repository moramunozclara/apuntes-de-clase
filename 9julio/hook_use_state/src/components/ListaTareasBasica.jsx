import { useState } from 'react'




export const ListaTareasBasica = () => {


    const datosTareas = ["Tarea1", "Tarea2", "Tarea3"]

    const [listaTareasBasica, setListaTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleAgregarTarea = () => {

        if(nuevaTarea.trim() == "" ) {return;}


        // agregar la tarea a ListaDeTareas
        setListaTareas ([...listaTareasBasica, nuevaTarea]);

        // limpiar el input
        setNuevaTarea("");

        // notificar al usuario
        alert("tarea creada")
    }



    return (

        <>
        <h3></h3>

        <input 
            vale = {nuevaTarea}

            onChange={(e) => {
                setNuevaTarea(e.target.value);
            }}

            placeholder="Ingresar tarea"
        />

        <button onClick= {handleAgregarTarea}>Crear</button>
        <ul>

                {listaTareasBasica.map((tarea, index) =>
                {return (<li>   
                    
                </li>)}) }

            {/* <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li> */}



        </ul>
        

        </>
      );
}