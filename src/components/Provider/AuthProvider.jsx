import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';


const auth = getAuth(app);

export const authContext = createContext(null)
const provider = new GoogleAuthProvider();










const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [load, setLoader] = useState(true)


    const createRegister = ( email, password ) => {


        return createUserWithEmailAndPassword(auth, email, password)


    }

    const LoggedIn = (email, password) => { 


        return signInWithEmailAndPassword( auth, email, password)
    }


    const Logout = () => { 


        return signOut(auth)
    }

    const googleLoged = () => { 

        return signInWithPopup(auth, provider)




    }

    const resetPassword = ( email) => { 

        return sendPasswordResetEmail(auth, email)




    }

   useEffect(() => {


   const unsubscribe= onAuthStateChanged (auth, (currentUser) => {

        setUser(currentUser)
        setLoader(false)




    })

    return (()=> {
        return unsubscribe()

    } )

   }, [])


const dataContext = {

    user,
    createRegister,
    LoggedIn,
    Logout,
    load,
    googleLoged,
    resetPassword



}
    return (
        <authContext.Provider value={dataContext}>


            {children}
            
        </authContext.Provider>
    );
};

export default AuthProvider;