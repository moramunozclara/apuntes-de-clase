import { useState } from "react";

const GaleriaImagenes = ({imageList}) => {

                                // El estado del que parte es la primera imagen, o sea la 0
    const [imagen, setImagen] = useState(0);        

    return ( 

        <>
            <div className="Card">

                {/* {imageList.map(({src, alt}, index) => (
                    <img 
                        key={index}
                        src={src} 
                        alt={`Imagen de ${alt}`}
                        title={`Imagen de ${alt}`} />
                ))} */}

                <img 
                    src={imageList[imagen].src}
                    alt={`Imagen de ${imageList[imagen].alt}`}
                    title={`Imagen de ${imageList[imagen].alt}`}
                />
                <button
                    onClick={() => {
                        if (imagen + 1 >= imageList.length) {  // Verificar si supera el límite
                        setImagen(0); // Volver al principio
                        } else {
                        setImagen(imagen + 1); // Incrementar normalmente
                        }
                    }}>
                    Siguiente
                    </button>


                <button
                    onClick={() => {
                        if (imagen - 1 < 0) {
                            // el length es de 3, mientras los indices son 0, 1, 2,
                            //  por eso hay que restarle 1
                            setImagen(imageList.length -1 )
                            
                        } else {
                            setImagen(imagen - 1)
                            
                        }
                    }}
                    >Anterior</button>


            </div>



        </>
     );
}
 
export default GaleriaImagenes;