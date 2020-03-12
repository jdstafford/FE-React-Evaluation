import React from 'react';

const ItemCard = props => {
    return props.item ? (
        <>
            <div className="column is-one-fifth" key={`item_${props.item.id}`}>
                <div className="box">
                    {props.itemType} {props.item.id}
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
