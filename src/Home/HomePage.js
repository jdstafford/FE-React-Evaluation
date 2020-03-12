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
        <div className="HomePage container">
            <h1>Welcome {user.name}</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
            </p>

            <h2>Interests</h2>
            <div className="columns is-multiline">
                {interests ? (
                    <>
                        {interests.map(interest => (
                            <div
                                className="column is-one-fifth"
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
            <div className="columns is-multiline">
                {skills ? (
                    <>
                        {skills.map(skill => (
                            <div
                                className="column is-one-fifth"
                                key={`skill_${skill.id}`}
                            >
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
