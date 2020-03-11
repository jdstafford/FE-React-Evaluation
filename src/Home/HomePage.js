import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
    const user = useSelector(state => state.user.data);
    console.log(user);
    return (
        <div className="HomePage">
            <h1>Hello, {user.username}!</h1>
        </div>
    );
}

export { HomePage };
