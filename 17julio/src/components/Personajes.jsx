import {useState, useEffect} from "react";



function Personajes() {

// lista
const [personajes, setPersonajes] = useState([]);

// objeto
const [info, setInfo] = useState({});

useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json() )
    .then(data => {
        console.log("Los datos de personaje son: ", data)
            setPersonajes(data.results);
            setInfo(data.info)
    }
)
}, []);


    return ( 
        <>
        <h2>2Personajes</h2>

        {personajes.map(function (personaje) {
            return (
                <>
                <div>

                    key={personaje.name}

                    </div>
                </>
            );
        })}
        </>


     );
}

export default Personajes;





