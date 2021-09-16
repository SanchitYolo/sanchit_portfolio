import React from "react";
import "./timeline.scss";
import workExperienceData from "../Config/workExperience.json";

const Timeline = () => {
    return (
        <ul className="timeline-block list-unstyled position-rel">
            {workExperienceData.projects.map((project, index) => {
                return (
                    <li key={index} className="timeline-el">
                        <div className="timeline-el__date text-right position-rel">
                            <div className="project-date">{project.date}</div>
                        </div>
                        <div className="timeline-el__content">
                            <div className="project__title">
                                <strong>{project.title}</strong>
                            </div>
                            <div className="project__desc">{project.description}</div>
                            {project.content}
                            <ul className="project__desc-pointers">
                                {project.pointers.map((point, index) => {
                                    return (
                                        <li key={"desc-point_" + index} className="desc-point">
                                            {point}
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="project__tech-skills d-flex list-unstyled">
                                {project.techUsed.map((skill, index) => {
                                    return (
                                        <li
                                            key={"skill_" + index}
                                            className="skill d-flex"
                                        >
                                            <a className="btn-primary" href="#">{skill}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                );
            })}
            <span className="timeline-el__birth">
                <span className="birth-date">Nov 28</span>
                <i className="fa-solid fa-bed icon"></i>
                <span className="birth-desc">Born</span>
            </span>
        </ul>
    );
};

export default Timeline;
