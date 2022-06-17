import React from "react";

import "./Button.scss";

const Button = (props) => {
    const { name, className, target, image } = props;
    return (
        <div>
            <button className={className}>
                
                {image ? <a href={target}>{name} <img src={image} alt="" /></a> : <a href={target}>{name}</a>}
                
            </button>
        </div>
    );
};

export default Button;
