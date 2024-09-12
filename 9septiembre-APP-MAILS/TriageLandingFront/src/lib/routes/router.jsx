import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../Layout'

import Home from '../../pages/Home';
import AllPosts from '../../pages/AllPosts';
import ErrorPage from '../../pages/ErrorPage';
// import RedactarCorreo from './components/RedactarCorreo';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        // errorElement: <ErrorPage/>,
        children: [ 
            {
                index: true,
                element: <Home/>
            },
            // {
            //     path: 'redactarcorreo', //los children van sin barra pq ya trae path
            //     element: <AllPosts/>
            // },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]);
 
export default router;