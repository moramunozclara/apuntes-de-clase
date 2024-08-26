import { useState } from "react";


const InterruptorOnOff = () => {

    const [interruptor, setInterruptor] = useState("Encendido");

    return ( 
        <div className={`Card ${interruptor === "Encendido" ? "CardEncendido" : "CardApagado"}`}>

            <p>La tarjeta está {interruptor === "Encendido" ? "encendida" : "apagada"}</p>

            <button 
                onClick={() => {
                    setInterruptor(interruptor === "Encendido" ? "Apagado" : "Encendido");
                    console.log(`El interruptor está ${interruptor === "Encendido" ? "Apagado" : "Encendido"}`);
                }}>
                {interruptor === "Encendido" ? "Apagar" : "Encender"}
            </button>
                
        </div>
     );


}


export default InterruptorOnOff;