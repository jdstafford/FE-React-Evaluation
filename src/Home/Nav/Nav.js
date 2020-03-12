import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileMenu from '../components/ProfileMenu';

import './Nav.css';

const Nav = () => {
    const user = useSelector(state => state.user);
    return (
        <div className="Nav navbar-brand">
            <div className="navbar-start">
                <img src="/u7.png" className="logo" alt="No.Inc logo" />
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/nav2">Navigation 2</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/nav3">Navigation 3</NavLink>
                </div>
                <div className="navbar-item">
                    <ProfileMenu username={user.username} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
