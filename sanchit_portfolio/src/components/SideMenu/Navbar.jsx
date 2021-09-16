import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav>
				<ul className="navbar-links list-unstyled">
					<li className="navbar-link">
						<NavLink to="/portfolio">PORTFOLIO</NavLink>
					</li>
					<li className="navbar-link">
						<NavLink to="/skills-to-offer">SKILLS TO OFFER</NavLink>
					</li>
					<li className="navbar-link">
						<NavLink to="/contact">CONTACT ME</NavLink>
					</li>
					<li className="navbar-link">
						<Link to="/CV_Sanchit.pdf" target="_blank" download>
							<span className="download-cv">MY CV</span>
							<i className="fa-solid fa-download icon"></i>
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
