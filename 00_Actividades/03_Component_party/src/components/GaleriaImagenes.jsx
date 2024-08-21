
// array de objetos
const GaleriaImagenes = ({imageList}) => {


    return ( 
        <div className="Card">

            {imageList.map ((item, index) => (
                    <img key={index} src={item.src} alt={`Imagen de ${item.alt}`} title={`Imagen de ${item.alt}`}/>
                ))}
        
        </div>
     );
}
 
export default GaleriaImagenes;