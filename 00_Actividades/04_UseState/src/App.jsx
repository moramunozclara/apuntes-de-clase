import './css/App.css'
import { useState } from 'react'

import ContadorSimple from './components/ContadorSimple'

import InterruptorOnOff from './components/InterruptorOnOff'

import ListaTareasBasica from './components/ListaTareasBasica'

import FormularioRegistro from './components/FormularioRegistro'

import GaleriaImagenes from './components/GaleriaImagenes'

import Temporizador from './components/Temporizador'





function App() {

  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];


  return (
    <>
        <ContadorSimple></ContadorSimple>
        <InterruptorOnOff></InterruptorOnOff>
        <ListaTareasBasica></ListaTareasBasica>
        <FormularioRegistro></FormularioRegistro>
        <GaleriaImagenes imageList={imageList}></GaleriaImagenes>
        <Temporizador></Temporizador>


    </>
  )
}

export default App
