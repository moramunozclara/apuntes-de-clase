import { useState } from "react";

const Temporizador = () => {

const [tiempo, setTiempo] = useState(0);

    return ( 
        <>

        <button
            onClick={setTiempo(0)}>
                STOP
            </button>

    
    
    
    
    
        </> 
        );
}
 
export default Temporizador;