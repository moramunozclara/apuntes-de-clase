
import { useState } from 'react'

// sfc y tabulador 

const Contador = () => {

    const [count, setCount] = useState(0)

    return ( 
            <div>
                {/* <p> Has hecho click {count} veces en el botón    </p> */}

                <p> Has hecho click {count} 
                    {count == 1 ? " vez " : " veces "}
                     en el botón    </p>

                <button onClick={() => setCount(count + 1)}>Botón</button>

            </div>
     );




}
 
export default Contador;