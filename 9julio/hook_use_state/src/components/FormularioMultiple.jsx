import {useState} from 'react';


// MultiStepForm
const FormularioMultiple = () => {
    const [paso, setPaso] = useState(1);
    const [formData, setformData] = useState({
        nombre: "",
        email: ""
    });


    const handleSubmit = () => {
        console.log("Enviando formulario")
    };
    const pasoAnterior = () => {
        console.log("Anterior")
    };
    const pasoSiguiente = () => {
        console.log("Siguiente")
    };
    
    const renderizarPasos = () => 
        { switch(paso){
            case 1: return <Paso1/>;
            case 2: return <Paso2/>;
            case 3: return <Paso3/>;
        } };
    ;

    return ( 
        <>
        <form onSubmit={handleSubmit}>

            {/* inputs aqui */}

            <button onClick={pasoAnterior}>Anterior</button>
            <button onClick={pasoSiguiente}>Sig</button>
            <button type="submit">Enviar</button>

            </form>
        </>
     );
}
 

const Paso1 = () => ( <div>Paso 1</div> );

const Paso2 = () => ( <div>Paso 2</div> );

const Paso3 = () => ( <div>Paso 3</div> );


export default FormularioMultiple;