import { useState } from 'react'

import './css/App.css'
import './css/rick-and-morty.css'



import Personajes from './components/Personajes'
import Personajesv2 from './components/Personajesv2'
import Episodios from './components/Episodios'

import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* esta version utiliza  react router */}
    <Router>
      <main className='Container'>

      <header>
        <nav>
          <ul>
                  {/* <li><button onClick={()=>setSeccion("personajes")}>Personajes</button></li>
                  <li><button onClick={()=>setSeccion("ubicaciones")}>Ubicaciones</button></li>
                  <li><button onClick={()=>setSeccion("episodios")}>Episodios</button></li> */}

                  {/* Sistema nuevo con REACT ROUTER */}
                  {/* <li><Link to="/personajes">Personajes</Link></li>
                  <li><Link to="/personajesv2">Personajesv2/Link></li>
                  <li><Link to="/episodios">Episodios</Link></li> */}

                  {/* Sistema nuevo con REACT ROUTER: NAVLINK
                      Crea un a:active para indicar al usuario 
                      dónde se encuentra en la página  */}
                  <li><NavLink  to="/personajes" className="Button-Link">Personajes</NavLink ></li>
                  <li><NavLink  to="/personajesv2" className="Button-Link">Personajesv2</NavLink ></li>
                  <li><NavLink  to="/episodios" className="Button-Link">Episodios</NavLink ></li>

                </ul>
        </nav>

      </header>



        {/* <h1>Rick & Morty</h1>
        <Personajes/> */}



        <div className='Content'>
            {/* Posibles RUTAS */}
            <Routes>
              <Route path="/personajes" element={<Personajes/>}/>
              <Route path="/personajesv2" element={<Personajesv2/>}/>
              <Route path="/episodios" element={<Episodios/>}/>
              {/* path o ruta principal - RAÍZ */}
              <Route path="/" element={<Personajes/>}/>            
              </Routes>
        </div>
    
      </main>
    </Router>


    </>
  )
}

export default App
