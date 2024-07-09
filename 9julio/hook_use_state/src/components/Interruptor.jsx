
import { useState } from 'react'


const Interruptor = () => {

    const [isEncendido, setEncendido] = useState(true)

    // return ( 
    //     <div className=''>
    //         <button onClick={() => setEncendido(true) }> Cambiar a modo {isEncendido ? " oscuro " : " claro "}</button>

    //     </div>
    //  );


// { isEncendido && }

// const modoOscuro ={
//     backgroundColor: 'black',
//     color: 'white'
// }
// const modoClaro ={
//     backgroundColor: 'white',
//     color: 'black'
// }

return (
    <button onClick={() => setEncendido (!isEncendido) } 
    className={isEncendido ? "lightMode" : "darkMode"} 
    > 
    Cambiar a modo {isEncendido ? " oscuro " : " claro "}</button>

)






}
 
export default Interruptor;