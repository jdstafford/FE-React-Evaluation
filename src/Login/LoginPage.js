import React from 'react';

import { LoginForm } from './';

function LoginPage() {
    return (
        <div className="Login container columns is-vcentered">
            <div className="column">LOGO GOES HERE</div>
            <div className="column">
                <p>Login to Our Magic Portal</p>
                <LoginForm />
            </div>
        </div>
    );
}

export { LoginPage };
