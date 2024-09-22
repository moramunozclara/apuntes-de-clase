import { useState, useEffect } from 'react';
import '../css/Pokeapi.css';

import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'


const Pokeapi = () => {

    const [pokeapi, setPokeapi] = useState([]);

    const [error, setError] = useState("");

    const [info, setInfo] = useState({
        "count": 0,
        "next": "null",
        "previous": null,
        "results": 0,
    });

    // versión con promesas + then catch
    const getPokeAPI = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)

        .then((response) => response.json())

        .then((data) => {
            console.log("Encontré lo siguiente: ", data);
            setPokeapi(data.results);  // Accede al array dentro del objeto (los results dentro de data) y actualiza el estado inicial;
            setInfo({
                count: data.count,
                next: data.next,
                previous: data.previous,
                results: data.results.length
            });
          })
        
        .catch((error) => {
                            console.error("Error al obtener los datos:", error);
                            setError("Hubo un error en la petición");
                            setPokeapi([]);
                            setInfo({});
        });
    };

    // versión async + await
    // const getPokeapi = async (url) => {
    //     const respuesta = await fetch(url);
    //     const objeto = await respuesta.json;
    //     console.log("Pokeapi.jsx objeto vale :", objeto);

    //     if(objeto.error) {
    //         setError("Hubo un error");
    //         setPokeapi([]); //corchetes porque es array
    //         setInfo({}); //llaves porque es objeto
    //     }
    //     else {
    //         setError(''); //nada porque no hubo error
    //         setPokeapi(objeto.results);
    //         setInfo(objeto.info);
    //     }

    // };

    useEffect(() => {
        getPokeAPI();
    }, []);

    return (

        // ETIQUETA VACÍA SIEMPRE, Y DENTRO TODO EL CODIGO 
        <>
        <h2>Lista de Pokémon</h2>
        {error && 
                    <p>{error}</p>}
    
        {pokeapi.length > 0 && (
            pokeapi.map((pokemon, index) => (
                            
                                <div key={index}>
                                    <h2>
                                        <Link to={`/pokemon/${pokemon.name}`}>
                                                                {pokemon.name}
                                        </Link>
                                    </h2>
                                </div>  
            ))
        )}        
        
        </>
        
     );
}
 
export default Pokeapi;