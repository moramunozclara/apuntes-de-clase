import { useState } from "react";

const FormularioRegistro = () => {

    const [inputs, setInputs] = useState({nombre: "", correo: "" });

    const handleChange = (e) => {

        setInputs({
            ...inputs,  // Copia todos los valores existentes
            [e.target.name]: e.target.value // Actualiza solo el campo que cambió
        });

        console.log(e.target.name, ": ", e.target.value)};


    return ( 
        <>
        <div className="Card">
            <h2>Formulario de registro</h2>
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
                </form>
            </div></>
     );
}
 
export default FormularioRegistro;