import React from 'react';

import { Nav } from './Nav';

export const PageWrapper = props => {
    return (
        <>
            <Nav />
            {props.children}
        </>
    );
};
