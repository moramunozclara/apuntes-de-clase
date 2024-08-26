import './css/App.css'
import { useState } from 'react'

import ContadorSimple from './components/ContadorSimple'

import InterruptorOnOff from './components/InterruptorOnOff'

import ListaTareasBasica from './components/ListaTareasBasica'



function App() {


  return (
    <>
        <ContadorSimple></ContadorSimple>
        <InterruptorOnOff></InterruptorOnOff>
        <ListaTareasBasica></ListaTareasBasica>


    </>
  )
}

export default App
