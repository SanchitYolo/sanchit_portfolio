import React from "react";
import socialLinkData from "../Config/socialLinks.json";

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="contact-block">
                <h1 className="main-title">CONTACT ME</h1>
                <div className="headline">
                    I am always excited to work on some awesome projects, message me and let's discuss over coffee.
                </div>
                <div className="sub-headline">
                    I am open to any ideas of cooperation or good opportunities.
                </div>
                <div className="social-links list-unstyled">
                    {socialLinkData.socialLinks.map((socialLink) => {
                        return (
                            <li
                                key={"contact-link" + socialLink.category}
                                className="social-link d-flex"
                            >
                                <div className="social-link__title">
                                    {socialLink.category + " :"}
                                </div>
                                <a
                                    className="social-link__href"
                                    href={socialLink.href}
                                    title={socialLink.altName}
                                    target="_blank"
                                >
                                    <i
                                        className={
                                            socialLink.iconClass + " text-center icon social-icon"
                                        }
                                    ></i>
                                    <span className="social-link__name">
                                        {socialLink.altName || "yolosanchit"}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Contact;
