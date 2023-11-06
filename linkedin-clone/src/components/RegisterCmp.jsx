import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import '../sass/LoginCmp.scss';
import LinkedinLogo from '../assets/Linkedin-logo.png';

export default function RegisterCmp() {
    const [cred, setCred] = useState({});
    let navigate = useNavigate();

    const onRegister = async () => {
        try {
            let resp = await RegisterAPI(cred.email, cred.password);
            toast.success('Sign up successful');
            localStorage.setItem('userEmail', resp.user.email);
            navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error('Cannot create your account');
        }
    }

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
    }

    return (
        <div className="login-wrapper">
            <img src={LinkedinLogo} className="linkedinLogo" />

            <div className="login-wrapper-inner">
                <h1 className="heading">Make the most of your professional life</h1>
                <div className="auth-inputs">
                    <label style={{ marginLeft: '-20%' }}>Name</label>
                    <input
                        style={{ width: '405px', marginLeft: '-20%' }}
                        onChange={(event) =>
                            setCred({ ...cred, name: event.target.value })
                        }
                        type="text"
                        className="common-input"
                    />
                    <label style={{ marginLeft: '-20%' }}>Email or phone number</label>
                    <input
                        style={{ width: '405px', marginLeft: '-20%' }}
                        onChange={(event) =>
                            setCred({ ...cred, email: event.target.value })
                        }
                        type="email"
                        className="common-input"
                    />
                    <label style={{ marginLeft: '-20%' }}>Password (6 or more characters)</label>
                    <input
                        style={{ width: '405px', marginLeft: '-20%' }}
                        onChange={(event) =>
                            setCred({ ...cred, password: event.target.value })
                        }
                        type="password"
                        className="common-input"
                    />
                </div>
                <button onClick={onRegister} className="login-btn">
                    Agree & Join
                </button>
            </div>
            <hr class="hr-text" data-content="or" />
            <div className='google-btn-container'>
                <GoogleButton
                    className='google-btn'
                    onClick={googleSignIn}
                />
                <p>Already on LinkedIn? <span className='join-now' onClick={() => navigate('/')}>Sign in</span></p>
            </div>
        </div>
    )
}
