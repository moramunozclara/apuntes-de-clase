import { useState, useEffect } from "react";





export const Ejercicio3UseEffect = () => {

    const [data, setData] = useState(null);

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