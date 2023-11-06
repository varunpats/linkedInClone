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
            localStorage.setItem('userEmail', resp.user.email);
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
        <div className="login-wrapper">
            <img src={LinkedinLogo} className="linkedinLogo" />

            <div className="login-wrapper-inner">
                <h1 className="heading">Sign in</h1>
                <p className="sub-heading">Stay updated on your professional world</p>

                <div className="auth-inputs">
                    <input
                        onChange={(event) =>
                            setCred({ ...cred, email: event.target.value })
                        }
                        type="email"
                        style={{ marginLeft: '-3%' }}
                        className="common-input"
                        placeholder="Email or Phone"
                    />
                    <input
                        onChange={(event) =>
                            setCred({ ...cred, password: event.target.value })
                        }
                        type="password"
                        style={{ marginLeft: '-3%' }}
                        className="common-input"
                        placeholder="Password"
                    />
                </div>
                <button onClick={onLogin} className="login-btn">
                    Sign in
                </button>
            </div>
            <hr className="hr-text" data-content="or" />
            <div className='google-btn-container'>
                <GoogleButton
                    className='google-btn'
                    onClick={googleSignIn}
                />
                <p>New to LinkedIn?{" "} <span className='join-now' onClick={() => navigate('/register')}>Join now</span></p>
            </div>
        </div>
    )
}
