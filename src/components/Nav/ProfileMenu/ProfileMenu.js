import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';

import './ProfileMenu.scss';

const ProfileMenu = props => {
    const dispatch = useDispatch();

    const [menuActive, setMenuActive] = useState(false);

    function handleLogout(e) {
        e.preventDefault();
        dispatch(userActions.logout());
    }

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    return (
        <div className="ProfileMenu">
            <div className={`dropdown ${menuActive ? 'is-active' : ''}`}>
                <div className="dropdown-trigger">
                    <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={toggleMenu}
                    >
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                            &nbsp;{props.username}
                        </span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
