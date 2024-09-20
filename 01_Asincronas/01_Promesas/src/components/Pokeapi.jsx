import { useState, useEffect } from 'react'
import '../css/Pokeapi.css'


const Pokeapi = () => {

    const [pokeapi, setPokeapi] = useState([]);

    const [error, setError] = useState("");

    const [info, setInfo] = useState({
        "count": 0,
        "next": "null",
        "previous": null,
        "results": 0,
    });


    useEffect(() => {
        getPokeapi('https://pokeapi.co/api/v2/pokemon');
        console.log("Encontré lo siguiente: ");
    }, []);

    const getPokeapi = async (url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json;
        console.log("Pokeapi.jsx objeto vale :", objeto);

        if(objeto.error) {
            setError("Hubo un error");
            setPokeapi([]); //corchetes porque es array
            setInfo({}); //llaves porque es objeto
        }
        else {
            setError(''); //nada porque no hubo error
            setPokeapi(objeto.results);
            setInfo(objeto.info);

        }

    }

    return (

        // ETIQUETA VACÍA SIEMPRE, Y DENTRO TODO EL CODIGO 
        <>
    
        {pokeapi.map(function(pokemon) {
                        return (
                            <div key={pokemon.id}>
                                {pokemon.id}{'. '}
                                {'Name:'} {pokemon.name} 
                                {' '} 
                                {'Gender:'} {pokemon.url}
                                {/* <img src={pokemon.image} alt={pokemon.name} /> */}
                                </div>
                        );
                    })}        
        
        </>
        

     );
}
 
export default Pokeapi;


// personajes.map(function (personaje) {
//     return (
//         <div key={personaje.id}>
//             {personaje.id}{'. '}
//             {'Name:'} {personaje.name} 
//             {' '} 
//             {'Gender:'} {personaje.gender}
//             <img src={personaje.image} alt={personaje.name} />
//             </div>
//     );