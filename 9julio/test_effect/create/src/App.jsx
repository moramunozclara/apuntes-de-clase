import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Ejercicio1UseEffect, Ejercicio2UseEffect, Ejercicio3UseEffect, Ejercicio4UseEffect, Ejercicio5UseEffect, Ejercicio6UseEffect} from './components/EjerciciosUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Ejercicio1UseEffect/>

        {/* <Ejercicio2UseEffect/> */}

        <Ejercicio3UseEffect/>


      </div>
    </>
  )
}

export default App
