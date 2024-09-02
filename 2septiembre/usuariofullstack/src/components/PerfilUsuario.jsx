

  const PerfilUsuario = () => {

    // indicamos las props / propiedades del objeto userData
    const userData =  {
        nombre: 'El Barto',
        email: 'elbarto@fox.com',
        img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",

        // dirección es el otro objeto anidado con más props dentro
        // también hay que desestructurarlo después
        direccion: {
          calle: 'Calle Falsa 123',
          ciudad: 'Springfield',
          codigoPostal: '12345'
        }
      };

    // desestructurar: convertimos los props (userData , direccion) en variables
    const { nombre, email, img, direccion } = userData;
    const { calle, ciudad, codigoPostal } = direccion;


    return (

        <div className="Card">

            {/* renderizamos los props extraídos de userData, no userData directamente */}
            <h2>{nombre}</h2>
            <h3>{email}</h3>
            <img src={img} alt={`Imagen de ${nombre}`} title={`Imagen de ${nombre}`} />

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
