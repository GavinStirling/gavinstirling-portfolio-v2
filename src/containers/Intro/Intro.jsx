import React from "react";

import "./Intro.scss";

import buttonArrow from "../../assets/images/intro/button-arrow.png";
import waveEmoji from "../../assets/images/intro/Emoji.png";
import ProfilePhoto from "../../assets/images/intro/STIRLING-80.jpg";

import Button from "../../components/Button/Button";

const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="intro__left">
                <p className="intro__subtitle">
                    Hey! I'm Gavin Stirling{" "}
                    <img
                        className="intro__emoji"
                        src={waveEmoji}
                        alt="Waving emoji"
                    />
                </p>
                <p className="intro__title">
                    A Junior Software Develop based in the UK.
                </p>

                <Button name={`Take a look at my work`} className="intro__button" target="#projects" image={buttonArrow} />

            </div>

            <img className="intro__image" src={ProfilePhoto} alt="Gavin Stirling" />
        </div>
    );
};

export default Intro;
