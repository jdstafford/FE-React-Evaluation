import React from 'react';
import { useParams } from 'react-router-dom';

import { capitalize } from '../../helpers';

function DetailsPage() {
    const { category, id: itemId } = useParams();

    return (
        <div className="DetailsPage container">
            <p>Category: {capitalize(category)}</p>
            <p>Id: {itemId}</p>
        </div>
    );
}

export { DetailsPage };
