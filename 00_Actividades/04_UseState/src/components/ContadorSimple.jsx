import { useState } from "react";

const ContadorSimple = () => {

    const [count, setCount] = useState(0);

    return ( 
        <div className="Card">

            <button onClick={() => setCount(count + 1)}>Botón</button>
            <button onClick={() => setCount(0)}>Resetear</button>


            <p> Has hecho click {count} 
                    {count == 1 ? " vez " : " veces "}
                     en el botón    </p>


        </div>
     );
}
 
export default ContadorSimple;