import React, { Component } from "react";
import Navbar from "./SideMenu/Navbar";
import Social from "./SideMenu/Social";
import Person from "./SideMenu/Person";
import "./sidemenu.scss";

class SideMenu extends Component {
	render() {
		return (
			<aside id="sidemenu" className="sidemenu">
				<div className="sidemenu__inner">
					<div id="sidemenu-person">
						<Person />
					</div>
					<div id="sidemenu-navbar">
						<Navbar />
					</div>
					<div id="sidemenu-social">
						<Social />
					</div>
				</div>
			</aside>
		);
	}
}

export default SideMenu;
