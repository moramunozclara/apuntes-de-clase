import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comment from './Comment'; // Importa el componente Comments




const Post = () => {


    const [postWithComments, setPostWithComments] = useState({})
    const {id} = useParams()

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch(`http://localhost:3000/API/v1/publicaciones/${id}`)

        .then( response => response.json())
        .then( data => {
            setPostWithComments(data) //corregir
            }
        )

        
    }, []);

    const {title, body, comments} = postWithComments; 
    return ( 

        <>
        
        <h3>*Soy el post { id} *</h3>
        <p>{title}</p>
        <p>{body}</p>

        {comments && comments.map((comentario, index) =>{

            return (
                <Comment key={index}  {...comentario}/>
                // <Comments key={index}  {...comentario}/>


            )

                // <li key={index}>
                //     <p>{title}</p>
                //     <p>{body}</p>
                // </li>
            })}    
        </>

     );
}
 
export default Post;