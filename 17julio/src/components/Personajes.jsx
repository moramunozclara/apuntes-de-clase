

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
    //                               {} objeto
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });
    //                                         "" texto definido por nosotros con el error
    const [errorData, setErrorData] = useState("");


useEffect(() => {
            getPersonajes("https://rickandmortyapi.com/api/character");
            console.log("[Personajes.jsx] cargando datos");
        }, []);

        const getPersonajes = async(url) => {
                const respuesta = await fetch(url);
                const objeto = await respuesta.json();
                console.log("[Personajes.jsx] objeto vale: ", objeto);

                // Prevención de errores

                if(objeto.error) {
                    setErrorData("No se encontraron resultados");
                    setPersonajes([]);
                    setInfo({});
                    return;
                }

                else {
                    setErrorData("");
                    setPersonajes(objeto.results);
                    setInfo(objeto.info);
                }

        };


    return ( 
        <>
        <h2>2Personajes</h2>

        {personajes.map(function (personaje) {
            return (
                <div key={personaje.id}>
                    {personaje.id}{'. '}
                    {'Name:'} {personaje.name} 
                    {' '} 
                    {'Gender:'} {personaje.gender}
                    <img src={personaje.image} alt={personaje.name} />
                    </div>
            );
        })}
        
        </>


     );
}

export default Personajes;





