import React from "react";

import "./NavLink.scss";

const NavLink = (props) => {
    const { target, name } = props;

    return (
        <div className="nav-link">
            <a href={target}>{name}</a>
        </div>
    );
};

export default NavLink;
