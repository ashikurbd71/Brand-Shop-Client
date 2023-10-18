import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'
import Authprovider from './Component/Authprovider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>

 <RouterProvider router={router}></RouterProvider>

 </Authprovider>
  </React.StrictMode>,
)
