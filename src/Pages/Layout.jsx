import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';

const Layout = () => {
    return (
        <div>
        <Navber></Navber>
         <div className='mx-auto px-5 lg:px-0 max-w-screen-xl'>
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Layout;