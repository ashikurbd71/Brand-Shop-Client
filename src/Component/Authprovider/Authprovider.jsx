import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, {  createContext, useState } from 'react';
import auth from '../../Firebase/Firebase';


export const Authcontext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setUser] = useState(null)
    const [load,setLoad] = useState(true)

// createuser

    const createuser = (email,password) => {

         setLoad(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // usersigin


    const userlogin = (email,password) => {

        setLoad(true)
        return signInWithEmailAndPassword(auth,email,password)

    }


    const data = {

        user,
        createuser,
        userlogin
    }

    return (
        <Authcontext.Provider value={data}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;