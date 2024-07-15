
import { useState } from 'react'


// sfnc
export const GaleriaImagenes = () => {

    const [imagen, setImagen] = useState(0)
    // 0 es mi valor inicial

    const ListaImagenes = ["imagen1.png", "imagen2.png", "imagen3.png"]

    
    return ( 

        <div>
                <img src={ListaImagenes[imagen]} alt={ListaImagenes[imagen]} />
                {/* <img src="imagen1.png" alt="imagen 1" /> */}

                <button onClick={() => {

                    if (imagen <= 0) {
                        setImagen(2)

                    } else {

                        setImagen(imagen - 1)

                    }



                }}>ANTERIOR</button>




                <button onClick={() => {
                    
                    if (imagen >= 2) {
                        setImagen(0)
                    }

                    else {
                        setImagen(imagen + 1)
                    }
                    
                
                    
                    }}>SIGUIENTE</button>


                

        </div>

     );
}

export default GaleriaImagenes;