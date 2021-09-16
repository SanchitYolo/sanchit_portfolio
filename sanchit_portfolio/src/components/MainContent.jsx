import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Portfolio from './MainContent/Portfolio';
import SkillsToOffer from './MainContent/SkillsToOffer';
import Contact from './MainContent/Contact';
import AboutMe from './MainContent/AboutMe';
import './main-content.scss';

class MainContent extends Component {
    render() {
        return (
            <div id="main-content">
                <Switch>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/skills-to-offer" component={SkillsToOffer}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/" exact component={AboutMe}></Route>
                    <Redirect to="/" />
                </Switch>
            </div >
        );
    }
}

export default MainContent;
