// import { useState } from 'react'
// ↑↑↑↑↑  copiar y pegar en cada componente importado  ↑↑↑↑↑↑

import './App.css'

import Contador from './components/Contador.jsx'
// import Interruptor from './components/Interruptor.jsx'
import {ListaTareasBasica} from './components/ListaTareasBasica.jsx'
import { Formulario } from './components/Formulario.jsx'
import { FormularioDeRegistro } from './components/FormularioDeRegistro.jsx'
// import FormularioMultiple from './components/FormularioMultiple.jsx'
import { GaleriaImagenes } from './components/GaleriaImagenes.jsx'



// CON LLAVES SI SE EXPORTÓ COMO OBJETO Y NO COMO DEFAULT


function App() {

  return (
    <>

      {
      /* <div className="card">

        <h2>Ejercicio 1: Contador simple</h2>
        <Contador/>
      </div>

      <div className="card">

      <h2>Ejercicio 2: Interruptor ON/OFF</h2>
      <Interruptor/>
      </div>

      <div className="card">

      <h2>Ejercicio 2: Interruptor ON/OFF</h2>
      <ListaTareasBasica/>
      </div>

      // <div className="card">
      // <h2>Formulario 2</h2>
      // <Formulario2/>
      // </div>

      // <div className="card">
      // <h2>Formulario 2</h2>
      // <Formulario/>
      // </div>

      // <div className="card">
      // <h2>Formulario de registro</h2>
      // <FormularioDeRegistro/>
      // </div>
       */
       
       
      <div className="card">
        <GaleriaImagenes/>
        </div>
       
       
       }


    </>
  )
}

export default App
