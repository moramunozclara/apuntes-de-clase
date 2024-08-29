import './css/App.css'
import { useState } from 'react'

import ContadorSimple from './components/ContadorSimple'

import InterruptorOnOff from './components/InterruptorOnOff'

import ListaTareasBasica from './components/ListaTareasBasica'

import FormularioRegistro from './components/FormularioRegistro'



function App() {


  return (
    <>
        <ContadorSimple></ContadorSimple>
        <InterruptorOnOff></InterruptorOnOff>
        <ListaTareasBasica></ListaTareasBasica>
        <FormularioRegistro></FormularioRegistro>


    </>
  )
}

export default App
