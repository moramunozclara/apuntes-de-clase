
const GaleriaImagenes = () => {

// array de objetos
const {src, alt} = imageList

    return ( 
        <div className="Card">

            <img src={src} alt={`Imagen de ${alt}`}/>
        
        </div>
     );
}
 
export default GaleriaImagenes;