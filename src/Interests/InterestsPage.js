import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function InterestsPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const interests = useSelector(state => state.user.interests);

    useEffect(() => {
        dispatch(userActions.getInterests(user.id));
    }, [dispatch, user.id]);

    return (
        <div className="InterestsPage container">
            <h1>Interests</h1>
            <div className="columns is-flex is-mobile">
                {interests ? (
                    <>
                        {interests.map(interest => (
                            <div
                                className="column"
                                key={`interest_${interest.id}`}
                            >
                                <div className="box">
                                    Interest {interest.id}
                                    <br />
                                    Name: {interest.name}
                                    <br />
                                    Type: {interest.type}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export { InterestsPage };
