import {Outlet} from 'react-router-dom';
import Posts from './components/Posts';


function Layout() {

  return (
    <>

      <h1>Vite + React</h1>
      <Outlet/>

      <Posts></Posts>



    </>
  )
}

export default Layout
