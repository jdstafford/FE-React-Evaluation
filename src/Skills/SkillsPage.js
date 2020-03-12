import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

import { ItemCardContainer } from '../components';

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
            <ItemCardContainer items={skills} itemsType="Skill" />
        </div>
    );
}

export { SkillsPage };
