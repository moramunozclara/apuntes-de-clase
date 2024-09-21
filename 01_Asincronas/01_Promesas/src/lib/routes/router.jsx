import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../Layout'

// import Home from '../../pages/Home';

import Pokeapi from '../../components/Pokeapi';
import Pokemon from '../../components/Pokemon';

import ErrorPage from '../../pages/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        // errorElement: <ErrorPage/>,
        children: [ 
            {
                index: true,
                element: <Pokeapi/> 
            },
            {
                path: ':name', //los children van sin barra pq ya trae path
                element: <Pokemon/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]);
 
export default router;