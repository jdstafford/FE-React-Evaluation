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

    const [errorMessages, setErrorMessages] = useState({});
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
        } else {
            setErrorMessages({
                username: username ? '' : 'Username is required',
                password: password ? '' : 'Password is required'
            });
        }
    }

    return (
        <form name="loginForm" onSubmit={handleSubmit}>
            {errorMessages.username && (
                <span className="has-text-danger is-size-7">
                    Username is required.
                </span>
            )}
            <input
                className={`input is-radiusless ${
                    errorMessages.username ? 'is-danger' : ''
                }`}
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
            />

            {errorMessages.password && (
                <span className="has-text-danger is-size-7">
                    Password is required.
                </span>
            )}
            <input
                className={`input is-radiusless ${
                    errorMessages.password ? 'is-danger' : ''
                }`}
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />

            <button className={`button ${isLoading}`}>LOGIN</button>
        </form>
    );
}

export { LoginForm };
