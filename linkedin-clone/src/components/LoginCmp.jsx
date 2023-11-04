import React, { useState } from 'react';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import '../sass/LoginCmp.scss';
import LinkedinLogo from '../assets/Linkedin-logo.png';

export default function LoginCmp() {
    const [cred, setCred] = useState({});
    let navigate = useNavigate();

    const onLogin = async () => {
        try {
            let resp = await LoginAPI(cred.email, cred.password);
            toast.success('Signed in to Linkedin!');
            navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error('Please check credential');
        }
    }

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
    }

    return (
        <div className='login-wrapper'>
            <img src={LinkedinLogo} className='linkedinLogo' />
            <div style={{marginLeft: '40%'}}>
                <h1 className='heading' style={{marginLeft: '-1%'}}>Sign in</h1>
                <p className='sub-heading' style={{marginLeft: '-1%'}}>Stay updated on your professional world</p>
                <input className='common-input' style={{marginLeft: '-1%'}} type='email' placeholder='Email or Phone' onChange={(e) => setCred({ ...cred, email: e.target.value })} /><br />
                <input className='common-input' style={{marginLeft: '-1%'}} type='password' placeholder='Password' onChange={(e) => setCred({ ...cred, password: e.target.value })} /><br />
                <button onClick={onLogin} className='login-btn'>Sign in</button><br />
            </div>
            <hr className='hr-text' data-content='or' />
            <div className='google-btn-container'>
                <GoogleButton
                    className='google-btn'
                    onClick={googleSignIn}
                />
                <p>New to LinkedIn? <span className='join-now' onClick={() => navigate('register')}>Join now</span></p>
            </div>
        </div>
    )
}
