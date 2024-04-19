import { Component } from "react";

import { Link } from "react-router-dom";


import NavBarStyle from "./Navbar.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
class NavBarButton extends Component {
	
	render() {
		return (
			
			<Link
				onClick={this.props.onClick}
				className={`${NavBarStyle.NavBarButton} ${FlexStyle.FlexRowCenter} ${this.props.location == this.props.to ? NavBarStyle.NavBarActiveButton : NavBarStyle.NavBarInactiveButton}`}
				to={this.props.to}>
				<p className={`${NavBarStyle.NavBarText}`}>
					{this.props.children}</p>
			</Link>
		)
	}
}
export default NavBarButton;