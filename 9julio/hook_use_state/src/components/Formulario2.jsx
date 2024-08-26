
import { useState } from 'react'

// sfnc
export const Formulario2 = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        rangoEdad: "",
        ocupacion: "",
    });
    const [errores, setErrores] = useState ({});

    const listaRangoEdad = [
        {value: "menor", label: "Menor de 18"},
        {value: "adulto-joven", label: "18-30"},
        {value: "adulto", label: "31-60"},
        {value: "adulto-mayor", label: "Mayor de 60"},
    ];

    const listaOcupaciones = [
        // el label va en mayúscula prque es lo que ve el usuario
        {value: "estudiante", label: "Estudiante"},
        {value: "empleado", label: "Empleado"},
        {value: "autónomo", label: "Autónomo"},
        {value: "desempleado", label: "Desempleado"},
    ];


//  CORREGIR AQUÍ -------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm = () => {
                const objetoErrores = {};

                if ()

                     return ()


        };
//  ------------------------------------------- CORREGIR A AQUÍ 


        //si existe algun error, guardarlo en errores
        // si no, mostrar resultado en consola
        if( Object.keys(listaErrores).length === 0 ) {
            console.log("Datos del formulario:", formData);
    
        } else {
            setErrores(listaErrores);
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        // setFormData({...formData, [name]:value });
        setFormData( prevData => ({...prevData, [name]: value}));
        }



        const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad);

    return ( 
        <>
        <h3>Formulario 2</h3>
        <form onSubmit={handleSubmit}>
            
            {/* input de nombre */}
            <div>
                <label htmlFor="nombre"></label>
                <input 
                    type="text" 
                    id="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {errores.nombre &&
                <p style={{color: 'red'}}>
                    {errores.nombre}
                </p>
                }
            </div>

            {/* input de apellido */}
            <div>
                <label htmlFor="apellido"></label>
                <input 
                    type="text" 
                    id="apellido" 
                    value={formData.apellido}
                    onChange={handleChange}
                />
                {errores.apellido &&
                <p style={{color: 'red'}}>
                    {errores.apellido}
                </p>
                }
            </div>

            {/* Selector de EDAD */}
            <div>
                <label htmlFor="rangoEdad">Rango de edad</label>
                <select 
                    name="rangoEdad" 
                    id="rangoEdad" 
                    value={formData.rangoEdad}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un rango</option>
                    {
                        listaRangoEdad.map ( rango =>   (
                            <option 
                                key={rango.value}
                                value={rango.value}
                                    >
                                {rango.label}
                            </option>
                        ))
                }

                </select>

                {errores.rangoEdad &&
                <p style={{color: 'red'}}>
                    {errores.rangoEdad}
                </p>
                }
            </div>


            {/* Selector de OCUPACIÓN */}
            {isAdulto && (
            <div>
                <label htmlFor="ocupacion">Ocupaciones</label>
                <select 
                    name="ocupacion" 
                    id="ocupacion" 
                    value={formData.ocupacion}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una ocupación</option>
                    {
                        listaOcupaciones.map ( ocupacion =>   (
                            <option 
                                key={ocupacion.value}
                                value={ocupacion.value}
                                    >
                                {ocupacion.label}
                            </option>
                        ))
                }
                </select>

                {errores.ocupacion &&
                <p style={{color: 'red'}}>
                    {errores.ocupacion}
                </p>
                }
            </div>
            )}

            <button type="submit">Enviar</button>
        </form>
        </>
     );
}