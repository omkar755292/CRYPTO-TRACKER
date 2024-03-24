import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

const UserAuthContext = createContext();

const UserAuthContextProvider = (props) => {
    const [user, setUser] = useState('');

    const register = async (email, password, fullName) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: fullName })
            return userCredential.user
        }
        catch (error) {
            alert(error.message);
        }
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const loginWithGoogle = async () => {
        try {
            const googleAuthProvider = new GoogleAuthProvider();
            return await signInWithPopup(auth, googleAuthProvider);

        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const value = { register, login, logout, forgetPassword, loginWithGoogle, user };
    return (
        <UserAuthContext.Provider value={value}>
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextProvider
export const useUserAuth = () => useContext(UserAuthContext);