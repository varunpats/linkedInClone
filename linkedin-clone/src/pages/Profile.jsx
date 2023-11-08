import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader';
import ProfileCmp from "../components/ProfileCmp";

export default function Profile({ currentUser }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            onAuthStateChanged(auth, (res) => {
                if (!res?.accessToken)
                    navigate('/');
                else
                    setLoading(false)
            });
        });
    }, [])
    return loading ? <Loader /> : <ProfileCmp currentUser={currentUser} />
}