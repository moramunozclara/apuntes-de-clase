import {Outlet, Link, NavLink} from 'react-router-dom';

import router from './lib/routes/router';


import './css/Layout.css';
import Pokeapi from './components/Pokeapi';
import Pokemon from './components/Pokemon';

function Layout() {

  return (

        <>
            {/* <header>
              <nav>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/users">Users</NavLink></li>
                  <li><NavLink to="/posts">Posts</NavLink></li>
                  <li><NavLink to="/photos">Photos</NavLink></li>
                  <li><NavLink to="/comments">Comments</NavLink></li>

                </ul>
              </nav>
            </header> */}

    <main></main>

      <h1>1. Ejercicio de promesas</h1>
      <Outlet/>
    </>

  )


}

export default Layout;