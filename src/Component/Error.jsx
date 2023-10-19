import React from 'react';
import error from '../assets/error.png'
import Navber from './Navber';
import Footer from './Footer';
const Error = () => {
    return (

        <>
        <Navber></Navber>
        <div className=' min-h-screen my-10' style={{
            backgroundImage: `url(${error})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } }>

           
        </div>
       <Footer></Footer>
        </>
    );
};

export default Error;