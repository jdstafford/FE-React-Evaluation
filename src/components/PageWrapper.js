import React from 'react';

import Nav from './Nav';

export const PageWrapper = props => {
    return (
        <React.Fragment>
            <Nav />
            {props.children}
        </React.Fragment>
    );
};
