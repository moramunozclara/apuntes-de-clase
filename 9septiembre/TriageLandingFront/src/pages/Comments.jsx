import { useState, useEffect } from "react";


const Comments = () => {


    const [comments, setComments] = useState([]);

    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/comments')
        fetch('http://localhost:3000/API/v1/comments')


        .then(response => response.json())
        .then( data => {
            setComments(data)
        })
        
    }, []);

    return ( 
        <>
                <h3>Comentarios</h3>

        
        <ul>{comments.map(({postId, id, name, email, body}) => (
            <li key={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{body}</p>

            </li>
        ))}
            </ul></>
        
     );
}
 
export default Comments;