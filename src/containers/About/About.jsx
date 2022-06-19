import React from 'react'

import "./About.scss"

import profilePhoto from "../../assets/images/intro/STIRLING-80.jpg"
import saFlag from "../../assets/images/about/sa-flag.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
      <h1 className="about__title">About Me</h1>
        <img className="about__image" src={profilePhoto} alt="Gavin Stirling" />

        <div className="about__left">
            <h1 className="about__title--desktop">About Me</h1>
            <p className="about__story">
                Hi my name is Gavin Stirling and I am a Junior Software Developer training with _Nology in London.
                <br /><br />
                I am originally from South Africa and have a degree in Mechanical Engineering. I relocated to the UK
                with my Wife, Tania, in April of 2022. This was also when I decided to make the change in career towards
                Software Development.
            </p>
        </div>
        <img className="about__flag" src={saFlag} alt="South African Flag" />

    </div>
  )
}

export default About