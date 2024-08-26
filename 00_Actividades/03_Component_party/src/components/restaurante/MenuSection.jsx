const MenuSection = ({titulo, items}) => {


    return ( 
        <>
        <div className="Card">
            
            <div className="MenuItems">
                <h2>{titulo}</h2>
                <div>
                    {items.map(({id, nombre, precio, descripcion}) => (
                        <div key={id}>
                            <h3>{nombre}</h3>
                            <h3>{precio}</h3>
                            <p>{descripcion}</p>
                        </div>
                    ) )}
            </div>
        </div>

        </div>
        </>
     );
}
 
export default MenuSection;