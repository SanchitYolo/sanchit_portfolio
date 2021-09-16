import React, { Component } from "react";
import AboutMeProfile from './AboutMe/AboutMeProfile';
import AboutMeDetails from './AboutMe/AboutMeDetails';

const AboutMe = () => {
    return (
        <div id="about-me" className="about-me">
            <div className="about-me-block">
                {/* <h1 className="main-title">ABOUT ME</h1> */}
                <AboutMeProfile />
                <AboutMeDetails />
            </div>
        </div>
    );
}

export default AboutMe;
