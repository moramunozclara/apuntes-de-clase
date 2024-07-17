import {useState, useEffect} from 'react';
// import { postsApi } from 'https://jsonplaceholder.typicode.com/posts';

import {FetchDataComp} from './FetchDataComp'


export const Ejercicio1UseEffect = () => {

            useEffect(() => {
                console.log("El componente se mostró por primera vez");
            }, [])
            // [] array vacío para ejecutar mi función 
            // y solo cuando carga el componente

            return ( 
                <h2>Ejercicio 1</h2>
            );
}

// export const Ejercicio2UseEffect = () => {

//     return ( 
//         <h2>Ejercicio 2</h2>
//      );
// }


// Ejercicio 3: Crea componente que obtenga datos de una API y los muestre en pantalla


// fetch API
export const Ejercicio3UseEffect = () => {

    const [data, setData] = useState([]);

    const FetchDataComp = () => {     
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        // return fetch('https://randomuser.me/API/?gender=female')

        .then((response) => response.json())
        .then((json) => console.log("Obtuve estos datos:", json));
 }

    return ( 
            <h2>Ejercicio 3</h2>
            // <div>
            //     <h3>Datos de usuario:
            //         <div></div>
            //     </h3>
            // </div>
            );


}


// export const Ejercicio4UseEffect = () => {
//     return ( 
//         <h2>Ejercicio 4</h2>
//      );
// }


// export const Ejercicio5UseEffect = () => {
//     return ( 
//         <h2>Ejercicio 5</h2>
//      );

// }


// export const Ejercicio6UseEffect = () => {
//     return ( 
//         <h2>Ejercicio 6</h2>
//      );
// }
 
 
