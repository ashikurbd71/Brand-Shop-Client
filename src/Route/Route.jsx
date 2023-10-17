import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout';
import Home from '../Pages/Home';
import Addproduct from '../Pages/Addproduct';
import Mycart from '../Pages/Mycart';
import Login from '../Form/Login';

 const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('brand.json')
                
            },
            {
                path:"/addproduct",
                element:<Addproduct></Addproduct>
            },
            {
                path:"/mycart",
                element:<Mycart></Mycart>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
        ]
    }
 ])

export default router;