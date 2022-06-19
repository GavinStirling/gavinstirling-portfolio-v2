import React from "react";

import "./Skills.scss";

import skillsArray from "../../assets/data/skills";

import Skill from "../../components/Skill/Skill";



const Skills = () => {
    const skillsJSX = skillsArray.map((skill, index) => {
        const image = skill.imageURL;
        console.log(image);
        return (
            <>
                <Skill
                    key={index+1}
                    name={skill.name}
                    image={skill.imageURL}
                />
            </>
        );
    });

    return (
        <div className="skills">
            <h1 className="skills__heading">Technical Skills</h1>
            <div className="skills__intro">
                <p>
                    Below are the skills which I have developed and made use of
                    in the below projects.
                </p>
            </div>
            <div className="skills__tiles">{skillsJSX}</div>
        </div>
    );
};

export default Skills;
