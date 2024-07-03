// import "../css/App.css"


const TarjetaUsuario = ( {edad, nombre, ocupacion} ) => {

    //DECONSTRUCCION

    // const {edad, nombre, ocupacion} = item;
    // console.log(item);

    return (
        <div className="Card">
            <h3>Tarjeta usuario</h3>
            {nombre}
        </div>

)
 }

 export default TarjetaUsuario;

