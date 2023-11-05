// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwDgq_ugc9GsDaph6Ws7q2SkzHvdgAMMU",
    authDomain: "linkedin-clone-9522b.firebaseapp.com",
    projectId: "linkedin-clone-9522b",
    storageBucket: "linkedin-clone-9522b.appspot.com",
    messagingSenderId: "916241789316",
    appId: "1:916241789316:web:bac396d71760587f91add1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);