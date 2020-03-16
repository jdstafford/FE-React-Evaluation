import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../../actions';

function LoginForm() {
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState('');
    const { username, password } = inputValues;

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(inputValues => ({ ...inputValues, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (username && password) {
            setIsLoading('is-loading');
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <form name="loginForm" onSubmit={handleSubmit}>
            <input
                className="input is-radiusless"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={username}
                required
            />
            <input
                className="input is-radiusless"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                required
            />

            <button className={`button ${isLoading}`}>LOGIN</button>
        </form>
    );
}

export { LoginForm };
