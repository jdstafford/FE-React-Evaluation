import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../../actions';

function LoginForm() {
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    const { username, password } = inputValues;

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(inputValues => ({ ...inputValues, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <form name="loginForm" onSubmit={handleSubmit}>
            <input
                className="input"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={username}
                required
            />
            <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                required
            />

            <button className="button">LOGIN</button>
        </form>
    );
}

export { LoginForm };
