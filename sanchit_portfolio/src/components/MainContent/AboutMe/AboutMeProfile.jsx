import React from 'react';
import { dynamicText } from '../../Config/personData.json';
import TextAnimation from '../../Common/TextAnimation';
import DynamicTime from './../../Common/DynamicTime';

const AboutMeProfile = () => {
    return (
        <div className="about-me__profile">
            <div className="intro-block text-center">
                <div className="name">Sanchit Goyal</div>
                <div className="headline">
                    <span className="static-text">I am &nbsp;</span>
                    <TextAnimation textArr={dynamicText} />
                </div>
                <div className="sub-headline about-me__time">
                    <DynamicTime />
                </div>
            </div>
        </div>
    );
}

export default AboutMeProfile;
