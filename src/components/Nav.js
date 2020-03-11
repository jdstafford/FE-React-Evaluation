import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/">Home</Link>
                </p>
                <p className="navbar-item">
                    <Link to="/nav2">Navigation 2</Link>
                </p>
                <p className="navbar-item">
                    <Link to="/nav3">Navigation 3</Link>
                </p>
                <ProfileMenu />
            </div>
        </div>
    );
};

export default Nav;
