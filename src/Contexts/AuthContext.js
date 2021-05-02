import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../../src/firebase'

const authContext = React.createContext();


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
   
    const value = {
        currentUser,
        signup
    }
    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext);
}
