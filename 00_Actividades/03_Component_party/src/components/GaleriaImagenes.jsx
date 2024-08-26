
// array de objetos
const GaleriaImagenes = ({imageList}) => {


    return ( 
        <div className="Card">

            {imageList.map (({src, alt}, index) => (
                    <img key={index} src={src} alt={`Imagen de ${alt}`} title={`Imagen de ${alt}`}/>
                ))}
        
        </div>
     );
}
 
export default GaleriaImagenes;