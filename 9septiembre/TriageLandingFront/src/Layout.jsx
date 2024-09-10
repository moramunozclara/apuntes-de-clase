import {Outlet, Link, NavLink} from 'react-router-dom';

import Hero from './components/Hero';
import Section from './components/Section';
import Features from './components/Features';
import Praise from './components/Praise';

import './css/App.css';

const VITE_BACKEND = import.meta.env.VITE_BACKEND;

function Layout() {

const [data, setData] = useState([]);

const getData = () => {
      // efecto secundario
      // fetch('https://jsonplaceholder.typicode.com/users')
      // fetch('http://localhost:3000/API/v1/users')
        fetch(`${VITE_BACKEND}/API/v1/users`)

      // convierte la respuesta HTTP en formato JSON
      .then(response => response.json())

      //toma los datos JSON y actualiza el estado "users"
      // con los resultados.
      .then(data => {
          console.log("Los datos de la API son: ", data)
          setData(data)
          }
      )

      /* 
          DATA son los datos obtenidos de la respuesta en formato JSON,
          tiene todos los datos de la API

          data.RESULTS contiene el ARRAY de la API
      */

  };

  return (
    <>
    
    <p>ALGO</p>
    <Hero hero={hero}></Hero>


    </>
  )
}

export default Layout
