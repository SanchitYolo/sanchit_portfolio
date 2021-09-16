import React from "react";
import Timeline from "../Common/Timeline";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="portfolio-block position-rel">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="main-title">PORTFOLIO</h1>
                    <div className="download-portfolio">
                        <Link to="/CV_Sanchit.pdf" target="_blank" download>
                            <i className="fa-solid fa-download icon"></i>
                            <span>Download</span>
                        </Link>
                    </div>
                </div>
                <div className="headline">
                    See my works below. Unless explicitly stated otherwise, all their
                    back-end and front-end parts were completely done by me.
                </div>
                <div id="timeline" className="timeline">
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
