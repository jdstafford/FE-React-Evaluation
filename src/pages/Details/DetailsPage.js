import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as pluralize from 'pluralize';

import { interestActions, skillActions } from '../../actions';

function DetailsPage() {
    const dispatch = useDispatch();
    const { category, id: itemId } = useParams();
    // @TODO: there has to be a better way than coupling this component
    const actionsLookup = {
        interests: { actions: interestActions, method: 'getInterestById' },
        skills: { actions: skillActions, method: 'getSkillById' }
    };
    const categoryActions = actionsLookup[category].actions;
    const categoryMethod = actionsLookup[category].method;
    const itemDetails = useSelector(
        state => state[pluralize.singular(category)]
    );

    useEffect(() => {
        dispatch(categoryActions[categoryMethod](itemId));
    });

    return (
        <div className="DetailsPage container">
            <h1>{itemDetails.name}</h1>
            <h2>{itemDetails.type}</h2>
            <p>{itemDetails.detail}</p>
        </div>
    );
}

export { DetailsPage };
