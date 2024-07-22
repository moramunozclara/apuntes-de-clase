import React {useState, useEffect} from "react";



function Personajes() {


const [personajes, setPersonajes] = useState();

useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json )
    .then(data => data.results)
}, []);


    return (  );
}

export default Personajes;





