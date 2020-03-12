import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './ProfileMenu.css';

const ProfileMenu = props => {
    return (
        <div className="ProfileMenu">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;{props.username}
        </div>
    );
};

export default ProfileMenu;
