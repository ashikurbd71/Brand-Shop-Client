import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Pages/Layout';

 const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>
    }
 ])

export default router;