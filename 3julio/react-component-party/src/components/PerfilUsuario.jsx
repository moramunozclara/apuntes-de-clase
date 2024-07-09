

  const PerfilUsuario = () => {

    const userData =  {
        nombre: 'El Barto',
        email: 'elbarto@fox.com',
        img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
        direccion: {
          calle: 'Calle Falsa 123',
          ciudad: 'Springfield',
          codigoPostal: '12345'
        }
      };


    const { nombre, email, img, direccion } = userData;
    const { calle, ciudad, codigoPostal } = direccion;

  

    return (

        <div className="Card">

            {/* renderizamos los props extraídos de userData, no userData directamente */}
            <h2>{nombre}</h2>
            <h3>{email}</h3>
            <img src={img} alt={`Imagen de ${nombre}`} />

            {/* renderizamos los props extraídos de Dirección, no dirección directamente */}
            <h3>Dirección</h3>
            <ul>
                <li>{calle}</li>
                <li>{ciudad}</li>
                <li>{codigoPostal}</li>
            </ul>

        </div>
      );
  }
   
  export default PerfilUsuario;
