const TiendaProductos = ({productos}) => {

    return ( 
        <div className="Card">
            <h2>Tienda de productos</h2>
            {productos.map(({id, name, price, description, image}) => (

            <div  className="Card ProductoItems" key={id}>
                <h2>{name}</h2>
                <h2>{price}</h2>
                <p>{description}</p>
                <img src={image} alt={`Imagen de ${name}`} />
            </div>
            ))}
        

        </div>
     );


}
 
export default TiendaProductos;