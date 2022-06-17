import React from "react";

import "./Intro.scss";

import buttonArrow from "../../assets/images/intro/button-arrow.png";
import waveEmoji from "../../assets/images/intro/Emoji.png";
import ProfilePhoto from "../../assets/images/intro/STIRLING-80.jpg";

const Intro = () => {
    return (
        <div id="intro" class="intro">
            <div class="intro__left">
                <p class="intro__subtitle">
                    Hey! I'm Gavin Stirling{" "}
                    <img
                        class="intro__emoji"
                        src={waveEmoji}
                        alt="Waving emoji"
                    />
                </p>
                <p class="intro__title">
                    A Junior Software Develop based in the UK.
                </p>
                <button class="intro__button">
                    <a href="#projects"> Take a look at my work </a>
                    <img src={buttonArrow} alt="button arrow" />
                </button>
            </div>

            <img class="intro__image" src={ProfilePhoto} alt="Gavin Stirling" />
        </div>
    );
};

export default Intro;
