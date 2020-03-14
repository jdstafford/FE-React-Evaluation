import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileMenu from './ProfileMenu/ProfileMenu';

import './Nav.scss';

export const Nav = () => {
    const user = useSelector(state => state.user);
    return (
        <div className="Nav navbar-brand is-mobile">
            <div className="navbar-start logo-wrapper">
                <div className="logo-container">
                    <img src="/u7.png" className="logo" alt="No.Inc logo" />
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <NavLink to="/home">Home</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/interests">Interests</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/skills">Skills</NavLink>
                </div>
                <div className="navbar-item">
                    <ProfileMenu username={user.username} />
                </div>
            </div>
        </div>
    );
};
