import React from 'react';
import error from '../assets/error.png'
import Navber from './Navber';
import Footer from './Footer';
const Error = () => {
    return (

        <>
        <Navber></Navber>

         <div className=' dark:bg-slate-800 '>
         <div className=' min-h-screen my-10 '>

<img src={error} alt="" className='w-full my-44 lg:my-0' />
  
</div>
         </div>
        
       <Footer></Footer>
        </>
    );
};

export default Error;