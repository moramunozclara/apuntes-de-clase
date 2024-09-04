import { useState, useEffect } from "react";



const Photos = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/photos')
        fetch('http://localhost:3000/photos')


        .then(response => response.json())
        .then( data => {
            setPhotos(data)
        })
        
    }, []);
    
    return ( 
        <>
        <ul>{photos.map(({albumId, id, title, url, thumbnailUrl}) => (
            <li key={id}>
                <img src={url} alt="Photo" title={title} />
            </li>
        ))}
            </ul></>
     );
}
 
export default Photos;