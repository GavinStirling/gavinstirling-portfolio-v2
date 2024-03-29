// import { useState } from "react";

import "./App.scss";
import "./assets/sass/reset.scss";

import Nav from "./containers/Nav/Nav";
import Intro from "./containers/Intro/Intro";
import Skills from "./containers/Skills/Skills";
import Projects from "./containers/Projects/Projects";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";

function App() {
    // const [switchProjectsPage, setSwitchProjectsPage] = useState(false);
    // const [switchSkillsPage, setSwitchSkillsPage] = useState(false);

    // const handleProjectsPageClick = () => {
    //     if (!switchProjectsPage) {
    //         setSwitchProjectsPage(true);
    //     }
    //     setSwitchProjectsPage(false);
    // };

    // const handleSkillsPageClick = () => {
    //     if (!switchProjectsPage) {
    //         setSwitchProjectsPage(true);
    //     }
    //     setSwitchProjectsPage(false);
    // };

    return (
        <div className="App">
            <Nav />
            <Intro />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}

export default App;
