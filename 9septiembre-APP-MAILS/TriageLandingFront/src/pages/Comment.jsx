const Comment = ({ name, email, body }) => {


    return ( 
        <>

        <div className="Card">
            <h3>*Soy un comentario*</h3>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>

        </>
        
     );
}
 
export default Comment;