
import { useState } from 'react'


// sfnc
export const GaleriaImagenes = () => {

    const [indiceImagen, setIndiceImagen] = useState(0)
    // 0 es mi valor inicial

    const listaImagenes = ["imagen1.png", "imagen2.png", "imagen3.png"]

    const ultimaImagen = listaImagenes.length -1
    
    return ( 

        <div>
                <img src={listaImagenes[indiceImagen]} alt={listaImagenes[indiceImagen]} />
                {/* <img src="imagen1.png" alt="imagen 1" /> */}

                <button onClick={() => {

                    if (indiceImagen <= 0) {
                        setIndiceImagen(ultimaImagen)

                    } else {

                        setIndiceImagen(indiceImagen - 1)

                    }



                }}>ANTERIOR</button>




                <button onClick={() => {
                    
                    if (indiceImagen >= ultimaImagen) {
                        setIndiceImagen(0)
                    }

                    else {
                        setIndiceImagen(indiceImagen + 1)
                    }
                    
                
                    
                    }}>SIGUIENTE</button>


                
        </div>

     );
}

export default GaleriaImagenes;