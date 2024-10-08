
import { useState } from 'react'

import {Checkbox, Input} from './forms/FormComponents'



//  USUARIO, CLAVE y CHECKBOX

// sfnc
export const FormularioDeRegistro = () => {

        // formData = todos los datos de mi formulario
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        aceptaTerminos: "",
    });
    const [errores, setErrores] = useState ({});

// ---------------------------------------



    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.user) objetoErrores.user="Debes ingresar un usuario";
        if(!formData.password) objetoErrores.password="Debes ingresar una contraseña";
        if(!formData.aceptaTerminos) objetoErrores.aceptaTerminos="Debes aceptar Términos y condiciones";


        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola


        // INFORME DE LOS DATOS EN LA CONSOLA CUANDO NO HAYA ERRORES
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
        // AVISO EN LA CONSOLA CUANDO HAYA UN ERROR ((NO LO VERÁ EL USUARIO))
            console.log("Errores encontrados:", listaErrores);
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

            <Checkbox
                name="aceptaTerminos"
                label="Acepta Términos:"
                type="checkbox"

                value={formData.aceptaTerminos}
                onChange={handleChange}

                error={errores.aceptaTerminos}
                className="textRed"
                // debug={true}
            
            
            />


            <button type="submit">Registrarse</button>
        </form>
        </>
     );    
}



