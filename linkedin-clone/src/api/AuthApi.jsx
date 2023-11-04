import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
    try {
        let res = signInWithEmailAndPassword(auth, email, password)
        return res;
    } catch (error) { }
}

export const RegisterAPI = (email, password) => {
    try {
        let res = createUserWithEmailAndPassword(auth, email, password)
        return res;
    } catch (error) { }
}

export const GoogleSignInAPI = () => {
    try {
        let googleProvider = GoogleAuthProvider()
        let res = signInWithPopup(auth, googleProvider)
        return res;
    } catch (error) { }
}