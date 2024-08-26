const TarjetasRecetas = ({tarjetasRecetas}) => {

    return ( 
        <div className="Card">
            <h2>Recetario</h2>
            {tarjetasRecetas.map(({id, name, image, ingredients, instructions}) => (
                <div className="Card TarjetaReceta" key={id}>
                    <h2>{name}</h2>
                    <img src={image} alt={`Imagen de ${name}`} title={`Imagen de ${name}`} />
                    <ul>
                        {ingredients.map((ingrediente) => (
                            <li>{ingrediente}</li>
                    ))}
                    </ul>

                    <ol>
                        {instructions.map((instruccion) => (
                                <li>{instruccion}</li>
                        ))}
                     </ol>

                </div>
            ))}
        </div>
     );
}
 
export default TarjetasRecetas;