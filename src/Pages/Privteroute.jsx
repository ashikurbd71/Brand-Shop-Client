import React, { useContext } from 'react';
import { Authcontext } from '../Component/Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privteroute = ({children}) => {

 const{user,load} = useContext(Authcontext)
 const location = useLocation()

  if(load){

    return <div className="w-full h-screen flex justify-center items-center bg-gray-100"><span className="loading loading-dots loading-lg"></span></div>
}

if(user){

    return children
}else{

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

   
};

export default Privteroute;