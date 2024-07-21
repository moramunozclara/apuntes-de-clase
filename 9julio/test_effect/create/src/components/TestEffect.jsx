import {useState, useEffect} from 'react';


const TestEffect = () => {

    const [cont, setCont] = useState(0);
    let valor2="HOLA"


    // El ciclo de vida de los componentes tiene 3 partes
    // 1. Cuando se carga por primera vez
    // Ejemplos:
    // Suscribir a un evento:   button.addEventListener("click", () => {} )
    useEffect ( () => {
        console.log("Monte el componente TestEffect");
    });

    // 2. Cada vez que se recarga o se reactualiza

    // 3. Cuando se quita / desaparece / elimino


    return ( 

     );
}
 
export default TestEffect;