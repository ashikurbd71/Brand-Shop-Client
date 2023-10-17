import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';


const Layout = () => {
    return (
        <div>
        <Navber></Navber>
        
         <div className=''>
            <Outlet></Outlet>
         </div>

         <Footer></Footer>
        </div>
    );
};

export default Layout;