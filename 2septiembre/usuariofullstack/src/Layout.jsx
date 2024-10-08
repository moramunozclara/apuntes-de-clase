import {Outlet, Link, NavLink} from 'react-router-dom';

import './css/App.css';

function Layout() {

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
          <li><NavLink to="/comments">Comments</NavLink></li>

        </ul>
      </nav>
    </header>

    <main></main>

      <h1>Usuario FullStack</h1>
      <Outlet/>


    </>
  )
}

export default Layout
