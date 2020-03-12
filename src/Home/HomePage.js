import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const interests = useSelector(state => state.user.interests);
    const skills = useSelector(state => state.user.skills);

    useEffect(() => {
        dispatch(userActions.getInterests(user.id));
        dispatch(userActions.getSkills(user.id));
    }, [dispatch, user.id]);

    return (
        <div className="HomePage">
            <h1>Welcome {user.name}</h1>

            <h2>Interests</h2>
            {interests ? (
                <div className="tile is-parent">
                    {interests.map(interest => (
                        <div
                            className="box tile is-child"
                            key={`interest_${interest.id}`}
                        >
                            Interest {interest.id}
                            <br />
                            Name: {interest.name}
                            <br />
                            Type: {interest.type}
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}

            <h2>Skills</h2>
            {skills ? (
                <div className="tile is-parent">
                    {skills.map(skill => (
                        <div
                            className="box tile is-child"
                            key={`skill_${skill.id}`}
                        >
                            Skill {skill.id}
                            <br />
                            Name: {skill.name}
                            <br />
                            Type: {skill.type}
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export { HomePage };
