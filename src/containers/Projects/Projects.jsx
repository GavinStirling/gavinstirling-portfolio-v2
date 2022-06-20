import React from "react";

import "./Projects.scss";

import Project from "../../components/Project/Project";

import projectsArray from "../../data/projects";

const Projects = () => {
    const ProjectJSX = projectsArray.map((project, index) => {
        return (
            <Project
            key={index+1}
                name={project.name}
                tech={project.tech}
                image={project.image}
                description={project.description}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
            />
        );
    });

    return (
        <div id="projects" className="projects">
            <h1 className="projects__heading">My Projects:</h1>
            <div className="projects__intro">
                <p>
                    Below are some of the projects which I have built. The code
                    can be found on my GitHub and they are all deployed as a
                    live website.
                </p>
            </div>
            <div className="projects__tiles">{ProjectJSX}</div>
        </div>
    );
};

export default Projects;
