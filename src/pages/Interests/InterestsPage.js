import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';

import { ItemCardContainer } from '../../components/ItemCard';

function InterestsPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const interests = useSelector(state => state.user.interests);

    useEffect(() => {
        dispatch(userActions.getInterests(user.id));
    }, [dispatch, user.id]);

    return (
        <div className="InterestsPage container">
            <ItemCardContainer items={interests} category="interest" />
        </div>
    );
}

export { InterestsPage };
