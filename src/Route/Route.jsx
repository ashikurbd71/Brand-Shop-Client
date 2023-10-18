import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout';
import Home from '../Pages/Home';
import Addproduct from '../Pages/Addproduct';
import Mycart from '../Pages/Mycart';
import Login from '../Form/Login';
import Register from '../Form/Register';
import Products from '../Pages/Products';
import Update from '../Pages/Update';
import Detlais from '../Pages/Detlais';

 const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/brand.json')
                
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
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/products/:brand',
                element:<Products></Products>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
               path:"/update",
               element:<Update></Update>
            },
            {
                path:"/detlais/:id",
                element:<Detlais></Detlais>,
                loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)

             }
        ]
    }
 ])

export default router;