const MenuSection = ({menu}) => {

    const {entrantes, principales, postres} = menu;

    return ( 
        <>
        <div className="Card">
            
            <div>
                <h2>Entrantes</h2>
                <div>
                    {entrantes.map(({id, nombre, precio, descripcion}) => (
                        <div key={id}>
                            <h3>{nombre}</h3>
                            <h3>{precio}</h3>
                            <p>{descripcion}</p>
                        </div>
                    ) )}
            </div>
        </div>

        <div>
        <h2>Principales</h2>
        <h2></h2>
        <h2></h2>
        </div>

        <div>
        <h2>Postres</h2>
        <h2></h2>
        <h2></h2>
        </div>

        </div>
        </>
     );
}
 
export default MenuSection;