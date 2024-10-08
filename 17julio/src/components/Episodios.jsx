
// 1º: importar useState y useEffect
import { useState, useEffect } from "react";


            // atajo usf = useState function
            // atajo uef = useEffect function


function Episodios() {

    // 2º: Definir el estado
    const [episodios, setEpisodios] = useState([]);


    // 3º: Llamar a la API con useEffect
    useEffect(() => {
        // efecto secundario
        fetch('https://rickandmortyapi.com/api/episode')

        // convierte la respuesta HTTP en formato JSON
        .then(response => response.json())

        //toma los datos JSON y actualiza el estado "episodios"
        // con los resultados.
        .then(data => {
            console.log("Los datos de personaje son: ", data)
            setEpisodios(data.results)
            setInfo(data.info)
            }
        )

        /* 
            DATA son los datos obtenidos de la respuesta en formato JSON,
            tiene todos los datos de la API

            data.RESULTS contiene el ARRAY de EPISODIOS
        */

    }, []);
    /* 
        Array vacío [] : para llamar a una API para obtener 
        datos iniciales cuando el componente se monta.
    */


    return ( 

            <h2>Episodios</h2>
        
     );
}

export default Episodios;            




// ffc
