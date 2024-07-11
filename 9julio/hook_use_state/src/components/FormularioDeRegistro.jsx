

import { useState } from 'react'


//  USUARIO, CLAVE y CHECKBOX

// sfnc
export const FormularioDeRegistro = () => {

    const [formData, setFormData] = useState({
        user: "",
        password: "",
        aceptaTerminos: "",
    });
    const [errores, setErrores] = useState ({});






// ---------------------------------------


// import {Select, Input} from './forms/FormComponents'


    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.user) objetoErrores.user="Debes ingresar un usuario";
        if(!formData.password) objetoErrores.password="Debes ingresar una contraseña";
        if(!formData.aceptaTerminos) objetoErrores.aceptaTerminos="Debes seleccionar un rango";

        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";

        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        let {name, value} = e.target;


        if(e.target.type == "checkbox"){
            value = e.target.checked;
            console.log("Checkbox value es:", value);
        }

        // setFormData({ ...formData, [name]:value });
        setFormData( prevData => ({ ...prevData, [name]: value}));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))

    }


    return ( 
        <>
        <form onSubmit={handleSubmit}>

            {/* input de User / Usuario */}
            <Input 
                name="user"
                label="Usario:"
                type="text"
                value={formData.user}
                onChange={handleChange}

                error={errores.user}
                className="textRed"
                debug={true}
            />

            {/* input de Password / Contraseña  */}
            <Input 
                name="password"
                label="Contraseña"
                type="password"

                value={formData.password}
                onChange={handleChange}
                error={errores.password}
                //debug={true}
            />


            <button type="submit">Enviar!</button>
        </form>
        </>
     );


    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.user) objetoErrores.user="Debes ingresar un user";
        if(!formData.password) objetoErrores.password="Debes ingresar un password";
        if(!formData.aceptaTerminos) objetoErrores.aceptaTerminos="Debes seleccionar un rango";

        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";

        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        let {name, value} = e.target;


        if(e.target.type == "checkbox"){
            value = e.target.checked;
            console.log("Checkbox value es:", value);
        }

        // setFormData({ ...formData, [name]:value });
        setFormData( prevData => ({ ...prevData, [name]: value}));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))

    }

        // BOTON ENVIAR     
        <form onSubmit={handleSubmit}>

            {/* input de user */}
            <Input 
                name="user"
                label="user:"
                type="text"
                value={formData.user}
                onChange={handleChange}
                error={errores.user}
                className="textRed"
                debug={true}
            />

            {/* input de password  */}
            <Input 
                name="password"
                label="password:"
                value={formData.password}
                onChange={handleChange}
                error={errores.password}
                //debug={true}
            />


            {/* select de rango de edad  */}
            <Check 
                name="aceptaTerminos"
                //label="Rango de edad:"
                // firstOptionLabel="Seleccione un rango"
                value={formData.aceptaTerminos}
                
                onChange={handleChange}
                lista={listaaceptaTerminoses}
                error={errores.aceptaTerminos}
                className=""
                debug={true}
            />

            <button type="submit">Enviar!</button>
        </form>
    
}



