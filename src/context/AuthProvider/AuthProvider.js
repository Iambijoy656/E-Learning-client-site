import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();


    // CreateUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login with email and password
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google signIn
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Github login
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }








    //    signOut

    const logOut = () => {
        return signOut(auth);
    }









    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('state change', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }

    }, [])



    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        logOut,
        signInWithGithub,
        signIn

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;