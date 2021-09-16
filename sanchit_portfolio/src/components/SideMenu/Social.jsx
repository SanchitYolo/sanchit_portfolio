import React from "react";
import socialLinkData from "../Config/socialLinks.json";

const Social = () => {
    return (
        <div className="social-block social">
            <div className="social__title">GET IN TOUCH</div>
            <div className="social__links list-unstyled d-flex">
                {socialLinkData.socialLinks.map((socialLink) => {
                    return (
                        <li
                            key={"sidemenu-social-link_" + socialLink.category}
                            className="social-link"
                        >
                            <a href={socialLink.href} title={socialLink.altName} target="_blank">
                                <i className={socialLink.iconClass + " icon"}></i>
                            </a>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Social;
