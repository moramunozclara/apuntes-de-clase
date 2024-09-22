import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/Pokeapi.css';

const Pokemon = () => {

    const {name} = useParams();

    const [pokemonData, setPokemonData] = useState(null); // espera un objeto y sus datos

    const [error, setError] = useState(""); // espera un string


    // versión con promesas + then catch
    const getPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        .then((response) => response.json())

        .then((data) => {
            console.log("Encontré lo siguiente: ", data);
            setPokemonData(data);  // Accede al array dentro del objeto (los results dentro de data) y actualiza el estado inicial;
          })
        
        .catch((error) => {
                            console.error("Error al obtener los datos:", error);
                            setError("Hubo un error en la petición");
                            setPokemonData(null);
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
        getPokemonData();
    }, [name]);



    if (error) {
        return <p>{error}</p>;
      }
    
      // Si pokemonData es null, mostramos el mensaje de carga
      if (!pokemonData) {
        return <p>Cargando...</p>;
      }

    return (

        // ETIQUETA VACÍA SIEMPRE, Y DENTRO TODO EL CODIGO 
        <>

        {pokemonData && (
                            
            <div>
                <h2>Pokémon: {name}</h2>
                <p>Altura: {pokemonData.height}</p>
                <p>Peso: {pokemonData.weight}</p>
            </div>

        )}
        
                                    {/* {'Name:'} {pokemon.name}  */}
                                    {/* {' '}  */}
                                    {/* {'Gender:'} {pokemon.url} */}
                                    {/* <img src={pokemon.image} alt={pokemon.name} /> */}      
        
        </>
        
     );
}
 
export default Pokemon


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