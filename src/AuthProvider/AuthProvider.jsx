import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    // sign up 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with fire base 
    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
    }, [])
    const AuthValue = { user, signUp, login }
    return (
        <AuthContext.Provider value={AuthValue} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;