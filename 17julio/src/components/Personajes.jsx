

// CODIGO DE Clara

import {useState, useEffect} from "react";


 /*
 
 const Personajesv2 = () => {
    const [filter, setFilter] = useState("");
    const [errorData, setErrorData] = useState("");
 */

const Personajes = () =>  {

    //                                           [] lista
    const [personajes, setPersonajes] = useState([]);
    //                               {} objeto JS, es sin comillas
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });
    //                                         "" texto definido por nosotros con el error
    const [errorData, setErrorData] = useState("");
    //                                   "" texto definido por nosotros (input de texto)
    const [filter, setFilter] = useState("");


useEffect(() => {
            getPersonajes("https://rickandmortyapi.com/api/character");
            console.log("[Personajes.jsx] cargando datos");
        }, []);

        // 1º traer los personajes y sus datos
        const getPersonajes = async(url) => {
                const respuesta = await fetch(url);
                const objeto = await respuesta.json();
                console.log("[Personajes.jsx] objeto vale: ", objeto);

                // Prevención de errores

                if(objeto.error) {
                    setErrorData("No se encontraron resultados");
                    setPersonajes([]);
                    setInfo({});
                }

                else {
                    setErrorData("");
                    setPersonajes(objeto.results);
                    setInfo(objeto.info);
                }

        };

        // 1º crear lel filtro por nombre
        const handleFilterByName = (e) => {

            const string = e.target.value;
                    // cadena de texto
            setFilter(string);
            // mostrar en consola el texto que se ingresó
            console.log(string);
            // si quitando los espacios de fuera la cadena de texto es superior a 3 caracteres,
            if(string.trim().length > 3){
                // devolver los personajes y añadir la cadena de texto a la url
            getPersonajes(`https://rickandmortyapi.com/api/character/?name=${string.trim()}`);
            }
        }


    return ( 
        <>
            <h2>texto auxiliar</h2>
        
        </>


     );
}

export default Personajes;





