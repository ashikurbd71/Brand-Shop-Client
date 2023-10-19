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
import Error from '../Component/Error';
import Privteroute from '../Pages/Privteroute';

 const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/brand.json')
                
            },
            {
                path:"/addproduct",
                element:<Privteroute><Addproduct></Addproduct></Privteroute>
            },
            {
                path:"/mycart",
                element:<Privteroute><Mycart></Mycart></Privteroute>,
                loader:() => fetch('http://localhost:5000/carts')
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
               path:"/update/:id",
               element:<Update></Update>,
               loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
               
            },
            {
                path:"/detlais/:id",
                element:<Privteroute><Detlais></Detlais></Privteroute>,
                loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)

             }
        ]
    }
 ])

export default router;