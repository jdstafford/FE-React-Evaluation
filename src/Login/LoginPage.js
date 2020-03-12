import React from 'react';

import { LoginForm } from './';

import './LoginPage.css';

function LoginPage() {
    return (
        <div className="Login center-all container">
            <div className="LoginModal columns box">
                <div className="Logo is-half column">LOGO GOES HERE</div>
                <div className="Form is-half column">
                    <p>Login to Our Magic Portal</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export { LoginPage };
