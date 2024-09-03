import { useState, useEffect } from "react";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')

        .then( response => response.json)
        .then( data => {
            setPosts(data) //corregir
        }
        )

        
    }, []);
    return ( 

        <>
        
        <h3>Posts</h3>
        {posts.map((
            {userId, id, title, body}
        ))}

        <ul>
            <li key={id}>
                <p>{title}</p>
            </li>
        </ul>
        
        </>


     );
}
 
export default Posts;