import React from "react";

import "./Project.scss";

import codeButtonImg from "../../assets/images/projects/button-code.png"
import previewButtonImg from "../../assets/images/projects/button-preview.png"


const Project = (props) => {
    const { name, tech, image, description, githubLink, deployedLink } = props;

    return <div className="project" id={name}>
            <img className="project__image" src={image} alt={name} />
            <p className="project__tech">
                {tech}
            </p>
            <p className="project__title">
                Connect Four Game
            </p>
            <p className="project__description">
               {description}
            </p>
            <div className="project__buttons">
                <a href={githubLink}>Code <img src={codeButtonImg}
                        alt="Code Button" /></a>
                <a href={deployedLink}>Preview <img src={previewButtonImg}
                        alt="Preview Button" /></a>
            </div>
        </div>
    
};

export default Project;
