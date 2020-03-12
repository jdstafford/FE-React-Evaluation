import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function SkillsPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const skills = useSelector(state => state.user.skills);

    useEffect(() => {
        dispatch(userActions.getSkills(user.id));
    }, [dispatch, user.id]);

    return (
        <div className="SkillsPage container">
            <h1>Skills</h1>
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

export { SkillsPage };
