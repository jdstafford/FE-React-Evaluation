import React from 'react';
import ItemCard from './ItemCard';

export const ItemCardContainer = props => {
    return props.items ? (
        <>
            <div className="columns is-multiline">
                {props.items.map(item => (
                    <ItemCard item={item} itemType={props.itemsType} />
                ))}
            </div>
        </>
    ) : (
        <></>
    );
};
