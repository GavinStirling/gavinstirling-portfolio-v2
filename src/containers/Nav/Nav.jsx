import React from "react";

import "./Nav.scss";

import navLogo from "../../assets/images/nav/nav-logo.png";
import navMenu from "../../assets/images/nav/nav-menu.png";

import NavLink from "../../components/NavLink/NavLink";
import Button from "../../components/Button/Button";

const Nav = () => {
    return (
        <nav className="navigation">
            <div className="navigation__left">
                <img
                    className="navigation__logo"
                    src={navLogo}
                    alt="Page Logo"
                />
                <span className="navigation__title">Gavin Stirling</span>
                <span className="navigation__title--tablet1">
                    Gavin
                    <span className="navigation__title--tablet2">Stirling</span>
                </span>
            </div>

            <div className="navigation__right">
                <img className="navigation__menu" src={navMenu} alt="Menu" />

                <div className="navigation__links">
                    <NavLink target="#intro" name="Home" />
                    <NavLink target="#about" name="About" />
                    <NavLink target="#projects" name="Projects" />
                </div>

                <Button name="Get in Touch" className="nav__contact" target="#footer" />

            </div>
        </nav>
    );
};

export default Nav;
