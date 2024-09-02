import {Outlet, Link} from 'react-router-dom';

function Layout() {

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/comments">Comments</Link></li>

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
