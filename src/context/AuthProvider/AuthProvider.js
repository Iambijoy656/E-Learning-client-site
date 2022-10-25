import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)



    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();


    // CreateUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google signIn
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Github login
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }


    //7. Forget Password
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }



    //    signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }









    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('state change', currentUser)
            setUser(currentUser)
            setLoading(false)
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
        signIn,
        loading,
        updateUserProfile,
        verifyEmail,
        resetPassword

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;