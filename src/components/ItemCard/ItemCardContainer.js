import React from 'react';

import * as pluralize from 'pluralize';
import { capitalize } from '../../helpers';

import ItemCard from './ItemCard';

const ItemCardContainer = props => {
    return props.items ? (
        <>
            <h2>{capitalize(pluralize(props.category))}</h2>
            <div className="ItemCardContainer columns is-multiline">
                {props.items.map(item => (
                    <ItemCard
                        item={item}
                        category={props.category}
                        key={`item_${item.id}`}
                    />
                ))}
            </div>
        </>
    ) : (
        <></>
    );
};

export default ItemCardContainer;
