

// CODIGO DE CLASE

import {useState, useEffect} from 'react';
// import AlienAI from '../components/Alien';

const Personajesv2 = () => {
    const [personajes, setPersonajes] = useState([]);
    const [filter, setFilter] = useState("");
    const [errorData, setErrorData] = useState("");
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });

    useEffect(()=> {
        getPersonajes("https://rickandmortyapi.com/api/character"); // utilizando async/await
        console.log("[Personajes.jsx] cargando datos");
    }, []); // al estar vacío únicamente se ejecuta en componentDidMount

    const getPersonajes = async (url) => {

        //const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        const respuesta = await fetch(url);
        // console.log("[Personajes.jsx] Respuesta vale:", respuesta);

        const objeto = await respuesta.json();
        console.log("[Personajes.jsx] Objeto vale:", objeto);

        // a veces devuelve error en lugar de results
        if(objeto.error){
            setErrorData("No se encontraron resultados");

            
            setPersonajes([]);
            setInfo({});
            return;
        } else {
            setErrorData("");
            setPersonajes(objeto.results);
            setInfo(objeto.info);
        }

    }

    const handleFilterByName = (e) => {
        const string = e.target.value;
        setFilter(string);
        console.log(string);
        if(string.trim().length > 3){
            getPersonajes(`https://rickandmortyapi.com/api/character/?name=${string.trim()}`);
        }
    }


    return ( 
        <section>
            <h3>Personajes</h3>

            <div className="flexBetween">
                <button disabled={!info.prev} onClick={() => { getPersonajes(info.prev) } }>Ant</button>
                <div className="flexCenter">
                    <input  type="text" 
                            onChange={ handleFilterByName } 
                            value={filter} 
                            placeholder="Buscar Personajes (4 chars)" 
                            style={{width:"200px"}
                    }/>
                    {filter} ({info.count})
                    <button className="flexCenter" style={{background:"red", color:"white", padding: "5px", width: "20px", height: "20px", fontSize:"small"}} onClick={
                        () => {
                            setFilter("");
                            getPersonajes("https://rickandmortyapi.com/api/character");
                        }
                    }>X</button>
                </div>

                <button disabled={!info.next} onClick={() => { getPersonajes(info.next) } }>Sig</button>
            </div>

            <div className="flexGrid">
                {errorData && <div>{errorData}</div>}
                {
                    // personajes.map( (personaje) => {
                    //     console.log(personaje);
                    //     return (
                    //         <div key={personaje.id}>
                    //          nombre: {personaje.name}
                    //         </div>
                    //     )
                    // })

                    personajes.map( (personaje, index) => 
                        <PersonajeCard key={personaje.id} {...personaje} index={index} /> 
                    )
                }
            </div>
           

        </section>
     );
}

const PersonajeCard = ({name, image, species, status, index}) => {
    // index no es id, viene del map para animar los elementos con un multiplicador

    // Possible status  values: "Alive", "Dead", "Unknown"
    // Set de color depending on status
    const color = (status == "Alive") ? "#7cb342" 
                                      : (status == "Dead")  ? "red" 
                                                            : "orange";

    return ( 
        <article className="Card" style={{opacity: 0, animation: `fadein 1s ${index * 0.2}s forwards`}}>
            <div className="floatCircleRight" style={{border: `2px solid ${color}`}} title={species}>
                <span className="speciesTooltip" style={{color:color, display:"flex"}}>
                    {/* Iconos de fonts.google.com/icons */} 
                    {status=="Dead"     && <span className="material-symbols-outlined">skull</span>}
                    {status=="Alive"    && <span className="material-symbols-outlined">favorite</span>}
                    {status=="unknown"  && <span className="material-symbols-outlined">device_unknown</span>}
                    {species} 
                </span>
                {/* {species == "Alien" ? <AlienAI color={color} />
                                    : <span style={{color}}>{species[0].toUpperCase()}</span>
                } */}
            </div>
            <img src={image} alt={name} />
            <div>
                <strong>{name}</strong>
            </div>
            {/* <span>{species}</span> */}
            {/* <span>{status}</span> */}
        </article> );
}
 
export default Personajesv2;