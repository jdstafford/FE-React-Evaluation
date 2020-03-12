import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';

import './Nav.css';

const Nav = () => {
    return (
        <div className="Nav navbar-brand">
            <div className="navbar-start">
                <img src="/u7.png" className="logo" alt="No.Inc logo" />
            </div>
            <div className="navbar-end">
                <p className="navbar-item">
                    <NavLink to="/">Home</NavLink>
                </p>
                <p className="navbar-item">
                    <NavLink to="/nav2">Navigation 2</NavLink>
                </p>
                <p className="navbar-item">
                    <NavLink to="/nav3">Navigation 3</NavLink>
                </p>
                <ProfileMenu />
            </div>
        </div>
    );
};

export default Nav;
