// import { useState } from 'react'
// ↑↑↑↑↑  copiar y pegar en cada componente importado  ↑↑↑↑↑↑

import './App.css'

import Contador from './components/Contador.jsx'
import Interruptor from './components/Interruptor.jsx'
import {ListaTareasBasica} from './components/ListaTareasBasica.jsx'
import { Formulario2 } from './components/Formulario2.jsx'
// CON LLAVES ORQUE SE EXPORTÓ COMO OBJETO Y NO COMO DEFAULT


function App() {

  return (
    <>

      <div className="card">

        <h2>Ejercicio 1: Contador simple</h2>
        <Contador/>
      </div>

      <div className="card">

      {/* <h2>Ejercicio 2: Interruptor ON/OFF</h2>
      <Interruptor/>
      </div> */}


      <h2>Ejercicio 2: Interruptor ON/OFF</h2>
      <ListaTareasBasica/>
      </div>


      <div className="card">
      <h2>Formulario 2</h2>
      <Formulario2/>
      </div>

    </>
  )
}

export default App
