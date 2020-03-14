import React from 'react';

import * as pluralize from 'pluralize';
import { capitalize, history } from '../../helpers';

import './ItemCard.scss';

const ItemCard = props => {
    const handleClick = itemId => {
        history.push(`/${pluralize(props.category)}/${itemId}`);
    };

    return props.item ? (
        <>
            <div className="ItemCard column is-one-third">
                <div className="box" onClick={() => handleClick(props.item.id)}>
                    {capitalize(props.category)} {props.item.id}
                    <br />
                    Name: {props.item.name}
                    <br />
                    Type: {props.item.type}
                </div>
            </div>
        </>
    ) : (
        <></>
    );
};

export default ItemCard;
