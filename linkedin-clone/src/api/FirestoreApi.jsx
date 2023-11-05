import { firestore } from "../firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let dbRef = collection(firestore, 'posts');

export const addPosts = (status) => {
    console.log(status);
    let object = {
        status
    };

    addDoc(dbRef, object)
        .then(() => toast.success("Post has been created successfully!"))
        .catch((err) => console.log(err))
}