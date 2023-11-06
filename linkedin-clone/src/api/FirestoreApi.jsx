import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let dbRef = collection(firestore, 'posts');

export const addPosts = (obj) => {
    addDoc(dbRef, obj)
        .then(() => toast.success("Post has been created successfully!"))
        .catch((err) => console.log(err))
}

export const getPosts = (setPosts) => {
    onSnapshot(dbRef, (response) => {
        setPosts(response.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        }))
    })
}