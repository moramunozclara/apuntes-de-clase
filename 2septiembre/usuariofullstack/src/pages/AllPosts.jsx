import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('http://localhost:3000/API/v1/publicaciones')

        

        .then( response => response.json())
        .then( data => {
            setPosts(data) //corregir
            }
        )

        
    }, []);
    return ( 

        <>
        
        <h3>Posts</h3>
        <ul>
            {posts.map(( { postId, id, title, body} ) => (
                <li key={id}>
                    <p>{title}</p>
                    <p>{body}</p>

                </li>
            ))}
        </ul>    
        </>

     );
}
 
export default AllPosts;