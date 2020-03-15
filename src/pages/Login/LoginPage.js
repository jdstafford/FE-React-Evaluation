import React from 'react';

import { LoginForm } from './';

import './LoginPage.scss';

function LoginPage() {
    return (
        <div className="Login center-all">
            <div className="LoginModal columns is-gapless box is-radiusless">
                <div className="Logo is-half column center-all">
                    <img src="/u7.png" className="logo" alt="No.Inc logo" />
                </div>
                <div className="Form is-half column center-all">
                    <p>Login to Our Magic Portal</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export { LoginPage };
