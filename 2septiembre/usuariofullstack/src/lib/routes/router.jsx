import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../Layout'

import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import Users from '../../pages/Users';
import Photos from '../../pages/Photos';
import Comments from '../../pages/Comments';
import ErrorPage from '../../pages/ErrorPage';



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
            {
                path: 'comments', //los children van sin barra pq ya trae path
                element: <Comments/>
            },
            {
                path: 'photos', //los children van sin barra pq ya trae path
                element: <Photos/>
            },
            {
                path: 'posts', //los children van sin barra pq ya trae path
                element: <Posts/>
            },
            {
                path: 'users', //los children van sin barra pq ya trae path
                element: <Users/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]);
 
export default router;