import React from "react";

import "./Projects.scss";

import Project from "../../components/Project/Project";

import projectsArray from "../../assets/data/projects";

const Projects = () => {
    const ProjectJSX = projectsArray.map((project) => {
        return <Project />;
    });

    return (
        <div className="projects">
            <h1 className="projects__heading">My Projects:</h1>
            <div className="projects__intro">
                <p>
                    Below are some of the projects which I have built. The code
                    can be found on my GitHub and they are all deployed as a
                    live website.
                </p>
            </div>
            <div className="project__tiles">{ProjectJSX}</div>
        </div>
    );
};

export default Projects;
