// import "../css/App.css"


const TarjetaUsuario = ( {edad, nombre, ocupacion} ) => {

    //DECONSTRUCCION
    // const {edad, nombre, ocupacion} = item;
    // console.log(item);

    return (
        <div className="Card">
            <h3>Tarjeta usuario</h3>
            {nombre}
            <p></p>
            {edad}             
            <p></p>
            {ocupacion}
        </div>
)
 }

 export default TarjetaUsuario;

