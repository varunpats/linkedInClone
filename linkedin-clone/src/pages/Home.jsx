import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import HomeCmp from '../components/HomeCmp';
import Loader from '../components/common/Loader';

export default function Home() {
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
    return loading ? <Loader /> : <HomeCmp />
}
