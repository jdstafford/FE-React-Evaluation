import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileMenu from './ProfileMenu/ProfileMenu';

import './Nav.scss';

export const Nav = () => {
    const user = useSelector(state => state.user);
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    return (
        <nav
            className="Nav navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item logo-container" href="/">
                    <img
                        src="/u7.png"
                        className="logo"
                        height="45"
                        width="136"
                        alt="No.Inc logo"
                    />
                </a>
                <div
                    className="navbar-burger burger"
                    onClick={handleBurgerClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="navbar-menu is-hidden-touch">
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

            <div
                className={`navbar-menu is-hidden-desktop ${
                    isBurgerActive ? 'is-active' : ''
                }`}
            >
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
        </nav>
    );
};
