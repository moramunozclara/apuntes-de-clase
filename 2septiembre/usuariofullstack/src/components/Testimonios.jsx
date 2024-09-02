const Testimonios = ({testimonios}) => {
    return ( 
        <div className="Card">
            {testimonios.map(({id, name, position, company, testimonial, image}) => (
                <div className="Card" key={id}>
                    <h3>{name}</h3>
                    <p>{position}</p>
                    <p>{company}</p>
                    <p>{testimonial}</p>
                    <img src={image} title={`Foto de perfil`} alt={`Foto de perfil`}/>
                </div>
            ))}

        </div>
     );
}
 
export default Testimonios;