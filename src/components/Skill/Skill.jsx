import React from "react";

import "./Skill.scss";

import image from "../../assets/images/skill-logos/git-logo.png";
// const image = "git-logo.png";

const Skill = (props) => {
    const { name } = props;

    return (
        <div className="skill">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Skill;
