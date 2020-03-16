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
            <div className="ItemCard column is-one-third-desktop is-half-tablet">
                <div
                    className="box is-radiusless"
                    onClick={() => handleClick(props.item.id)}
                >
                    <h1>
                        {capitalize(props.category)} {props.item.id}
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Name:</td>
                                <td>{props.item.name}</td>
                            </tr>
                            <tr>
                                <td className="label">Type:</td>
                                <td>
                                    <span
                                        className={`item-type ${props.item.type.toLowerCase()}`}
                                    >
                                        {props.item.type}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
};

export default ItemCard;
