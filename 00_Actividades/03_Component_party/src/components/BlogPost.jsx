import { Children } from "react";

const BlogPost = (props) => {


    return ( 
            <div className="Card">
                <h1>{props.titulo}</h1>
                <h2>Autor:{props.autor}</h2>
                <h3>Fecha: {props.fecha}</h3>
                <div>{props.children}</div>
            </div> 
    );
}
 
export default BlogPost;