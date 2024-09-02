import { useState, useEffect } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    // Llamar a la API con useEffect
    useEffect(() => {
        // efecto secundario
        fetch('https://jsonplaceholder.typicode.com/users')

        // convierte la respuesta HTTP en formato JSON
        .then(response => response.json())

        //toma los datos JSON y actualiza el estado "users"
        // con los resultados.
        .then(data => {
            console.log("Los datos de los usuarios son: ", data)
            setUsers(data)
            }
        )

        /* 
            DATA son los datos obtenidos de la respuesta en formato JSON,
            tiene todos los datos de la API

            data.RESULTS contiene el ARRAY de EPISODIOS
        */

    }, []);
    /* 
        Array vacío [] : para llamar a una API para obtener 
        datos iniciales cuando el componente se monta.
    */




    return ( 
        <>
        
            <h2>Users</h2>

            <ul>
                {users.map((
            {id, name, username, email, address, phone, website, company}) => (
                    <li key={id}>
                        <h3>{name} ( {username} )</h3>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{website}</p>


                    </li>
                ))}
            </ul>
        
        
        
        </>
     );
}
 
export default Users;