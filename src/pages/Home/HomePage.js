import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';

import { ItemCardContainer } from '../../components/ItemCard';

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

            <ItemCardContainer items={interests} category="interest" />

            <ItemCardContainer items={skills} category="skill" />
        </div>
    );
}

export { HomePage };
