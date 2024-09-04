import { useState, useEffect } from "react";


const Comments = () => {


    const [comments, setComments] = useState([]);

    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/comments')
        fetch('http://localhost:3000/comments')


        .then(response => response.json())
        .then( data => {
            setComments(data)
        })
        
    }, []);

    return ( 
        <>
        
        <p>Soy un comentario</p></>
        
     );
}
 
export default Comments;