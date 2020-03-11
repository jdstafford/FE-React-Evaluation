import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    dispatch(userActions.getInterests(user.id));
    dispatch(userActions.getSkills(user.id));

    return (
        <React.Fragment>
            <h1>Hello, {user.username}!</h1>
        </React.Fragment>
    );
}

export { HomePage };
