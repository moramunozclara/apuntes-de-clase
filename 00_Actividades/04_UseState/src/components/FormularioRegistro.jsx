import { useState } from "react";

const FormularioRegistro = () => {

    const [nombre, setNombre] = useState();

    const [correo, setCorreo] = useState();





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
                value={nombre} 
                onChange={(e) => {setNombre(e.target.value);
                    console.log("Nombre:", e.target.value)}}
                placeholder="Escriba su nombre"/>

                <br />
                <label htmlFor="email">Email </label>
                <input id="email" 
                name="correo"
                type="email" 
                value={correo} 
                onChange={(e) => {setCorreo(e.target.value);
                    console.log("Mail:", e.target.value)}} 
                placeholder="Escriba su correo electrónico" />
                </form>
            </div></>
     );
}
 
export default FormularioRegistro;