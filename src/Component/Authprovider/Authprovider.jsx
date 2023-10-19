import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
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

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoad(false)
        })
        return (() =>{
            unSubscribe()
        })
    },[])

    // siginout

    const userlogout = () => {

        return signOut(auth)
    }

    // updateuser

    const updateuser = (name,photo) => {

        return updateProfile(auth .currentUser, {
            displayName: name,
             photoURL: photo
          })
    }


    const data = {

        user,
        createuser,
        userlogin,
        userGooglesigin,
        load,
        userlogout,
        updateuser
    }

    return (
        <Authcontext.Provider value={data}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;