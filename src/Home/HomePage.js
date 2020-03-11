import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
    const user = useSelector(state => state.user);
    return (
        <React.Fragment>
            <h1>Hello, {user.username}!</h1>
        </React.Fragment>
    );
}

export { HomePage };
