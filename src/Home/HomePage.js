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

            <h2>Skills</h2>
            <div className="columns is-flex is-mobile">
                {skills ? (
                    <>
                        {skills.map(skill => (
                            <div className="column" key={`skill_${skill.id}`}>
                                <div className="box">
                                    Skill {skill.id}
                                    <br />
                                    Name: {skill.name}
                                    <br />
                                    Type: {skill.type}
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

export { HomePage };
