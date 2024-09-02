// import "../css/App.css"


const TarjetaUsuario = ( {edad, nombre, ocupacion} ) => {

    //DECONSTRUCCION
    // const {edad, nombre, ocupacion} = item;
    // console.log(item);

    return (
        <div className="Card">
            <h3>Tarjeta usuario</h3>
        
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Ocupación: {ocupacion}</p>
            
        </div>
)
 }

 export default TarjetaUsuario;

