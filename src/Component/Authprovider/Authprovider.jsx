import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, {  createContext, useState } from 'react';
import auth from '../../Firebase/Firebase';


export const Authcontext = createContext(null)
const googleprovider = new GoogleAuthProvider()

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

    // googlesigin

    const userGooglesigin = () => {

        return signInWithPopup(auth,googleprovider)
    }


    // obsever

    onAuthStateChanged(auth,users => {

        setLoad(false)

        setUser(users)
    })

    // siginout

    const userlogout = () => {

        return signOut(auth)
    }


    const data = {

        user,
        createuser,
        userlogin,
        userGooglesigin,
        load,
        userlogout
    }

    return (
        <Authcontext.Provider value={data}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;