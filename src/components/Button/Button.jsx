import React from "react";

import "./Button.scss";

const Button = (props) => {
    const { name, className, target } = props;
    return (
        <div>
            <button className={className}>
                {" "}
                <a href={target}>{name}</a>{" "}
            </button>
        </div>
    );
};

export default Button;
