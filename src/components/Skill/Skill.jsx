import React from "react";

import "./Skill.scss";

// import image from "../../assets/images/skill-logos/git-logo.png";
// const image = "git-logo.png";

const Skill = (props) => {
    const { name, image } = props;

    return (
        <div className="skill">
            <div className="skill__face skill__face-front">
                <img src={image} alt={name} />
            </div>
            <div className="skill__face skill__face-back">{name}</div>
        </div>
    );
};

export default Skill;
