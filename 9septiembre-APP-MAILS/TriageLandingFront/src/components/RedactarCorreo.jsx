import { useState, useEffect } from "react";


const RedactarCorreo = () => {

    // const [correos, setCorreos] = useState([]);
    // const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para almacenar la nueva tarea

    const [inputs, setInputs] = useState({nombre: "", correo: "" });

    const handleChange = (e) => {

        setInputs({
            ...inputs,  // Copia todos los valores existentes
            [e.target.name]: e.target.value // Actualiza solo el campo que cambió
        });

        console.log(e.target.name, ": ", e.target.value)};



    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        })
        .then(response => response.json())
        .then(data => {
            setResponse(data);
        })
        .catch(error => console.error('Error posting data:', error));
    };    


    return ( 
        <>

        <div className="Card">
            <h2>Redactar correo</h2>
            <form action="">
                <label htmlFor="name">Nombre </label>
                <input 
                name="nombre"
                id="name"
                type="text" 
                value={inputs.nombre} 
                onChange={handleChange}
                placeholder="Escriba su nombre"/>

                <br />

                <label htmlFor="email">Email </label>
                <input id="email" 
                name="correo"
                type="email" 
                onChange={handleChange} 
                placeholder="Escriba su correo electrónico" />

                <br />

                <label htmlFor="subject">asunto </label>
                <input id="subject"
                name="asunto"
                type="text" 
                value={inputs.asunto} 
                onChange={handleChange}
                placeholder="Escriba un asunto"/>

                <br />

                <textarea 
                name="contenido" 
                id="content"
                value={inputs.content} 
                onChange={handleChange}
                placeholder="Escribe tu mensaje"
                ></textarea>
                </form>

            </div>
            </>
     );
}
 
export default RedactarCorreo;