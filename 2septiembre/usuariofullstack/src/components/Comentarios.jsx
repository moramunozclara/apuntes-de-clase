const Comentarios = ({comentarios}) => {


    return ( 
        
        <div className="Card">

            <h2>Comentarios</h2>

           {comentarios.map(({id, author, content, date, replies}) => (
            <div className="Card" key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
                <p>{date}</p>
                {replies && replies.length > 0 && (
                    <div>
                    {replies.map(({id, author, content, date}) => (
                        <div className="Card" key={id}>
                            <h4>{author}</h4>
                            <p>{content}</p>
                            <p>{date}</p>
                        </div>
                        ))}
                    </div>
                )}
                
            </div>
           ))} 
            
        </div>
     );
}
 
export default Comentarios;