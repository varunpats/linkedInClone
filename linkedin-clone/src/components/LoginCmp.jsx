import React, { useState } from 'react';
import { LoginAPI } from '../api/AuthApi';
import '../sass/LoginCmp.scss';

export default function LoginCmp() {
    const [cred, setCred] = useState({});

    const onLogin = async() => {
        let resp = await LoginAPI(cred.email, cred.password);
        console.log(resp?.user);
    }

    return (
        <>
            <div>LoginCmp</div>
            <input className='common-input' placeholder='Enter Email' onChange={(e) => setCred({ ...cred, email: e.target.value })} />
            <input className='common-input' placeholder='Enter Password' onChange={(e) => setCred({ ...cred, password: e.target.value })} />
            <button onClick={onLogin} className='login-btn'>Log in to Linkedin</button>
        </>
    )
}
