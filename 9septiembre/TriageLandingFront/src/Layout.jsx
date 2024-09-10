import {Outlet, Link, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react'; // Importar useState y useEffect desde react


import Hero from './components/Hero';
import Section from './components/Section';
import Features from './components/Features';
import Praise from './components/Praise';

import './css/App.css';

const VITE_BACKEND = import.meta.env.VITE_BACKEND;

function Layout() {

    const [heroData, setHeroData] = useState(null);
    const [sectionsData, setSectionsData] = useState([]);

      
    const getHeroData = () => {
      fetch(`${VITE_BACKEND}/API/v1/hero`)

        .then((response) => response.json())

        .then((data) => {
          console.log("Los datos de la API para hero son: ", data);
          setHeroData(data);  // Actualiza el estado de heroData
        })

        .catch((error) => console.error("Error al obtener los datos:", error));
    };

    const getSectionsData = () => {
      fetch(`${VITE_BACKEND}/API/v1/sections`)

        .then((response) => response.json())

        .then((data) => {
          console.log("Los datos de la API para Sections son: ", data);
          setSectionsData(data);  // Actualiza el estado de SectionsData
        })

        .catch((error) => console.error("Error al obtener los datos:", error));
    };

    useEffect(() => {
      getHeroData();
      getSectionsData();
      
    }, []);




  return (
    <>

      <div className="Card">
      <h1>HERO</h1>
      { heroData && <Hero heroData={heroData} />}
      </div>

      <div className="Card">
      <h1>SECTIONS</h1>
      { sectionsData &&  sectionsData.length > 0 && sectionsData.map((section, index) => (<Section key={index} section={section}/>) ) }
      </div>


    </>
  )
  }

export default Layout;
