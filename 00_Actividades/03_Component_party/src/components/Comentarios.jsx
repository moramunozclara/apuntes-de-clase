const Comentarios = ({comentarios}) => {

const {id, author, date, content} = replies   

    return ( 
        
        <div className="Card">

           {comentarios.map((item, index) => (
            <div key={index}>
                <h2>{item.author}</h2>
                <p>{item.author}</p>
                <p>{item.date}</p>
                {replies.map()}
            </div>
           ))} 
            
        </div>
     );
}
 
export default Comentarios;