import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import LoginCmp from '../components/LoginCmp';
import Loader from '../components/common/Loader';

export default function Login() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (res?.accessToken)
                navigate('/home');
            else
                setLoading(false)
        });
    }, [])
    return loading ? <Loader /> : <LoginCmp />
}