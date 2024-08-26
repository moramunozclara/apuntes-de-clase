const TiendaProductos = ({productos}) => {

    return ( 
        <div className="Card">
            <h2>Tienda de productos</h2>
            {productos.map((item, index) => (

            <div className="ProductoItems" key={index}>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={`Imagen de ${item.name}`} />
            </div>
            ))}
        

        </div>
     );


}
 
export default TiendaProductos;