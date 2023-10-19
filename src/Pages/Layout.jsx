
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div className=' dark:bg-black'>
        <Navber></Navber>
        
         <div className=''>
            <Outlet></Outlet>
         </div>

         <Footer></Footer>

         <Toaster></Toaster>
        </div>

    
    );
};

export default Layout;