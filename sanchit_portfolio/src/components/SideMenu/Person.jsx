import React from "react";
import { Link } from "react-router-dom";
import personData from "../Config/personData.json";

const Person = () => {
    return (
        <div className="person__inner text-center">
            <Link to="/">
                <div className="person__image">
                    <img
                        className="br-half"
                        src="/assets/sanchit_yolo_img1.jpg"
                        alt="Sanchit YOLO"
                        width="150"
                    />
                </div>
                <div className="person__basic-details">
                    <div className="name"><strong>{personData.name}</strong></div>
                    <div className="designation">{personData.designation}</div>
                </div>
            </Link>
            <div className="person__more-details">
                {/* <div className="headline">{personData.headline}</div> */}
                <em className="quote">{personData.quote}</em>
            </div>
        </div>
    );
};

export default Person;
