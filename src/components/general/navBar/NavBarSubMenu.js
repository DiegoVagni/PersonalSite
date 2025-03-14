import { Component } from "react";
import TrapezoidUp from "../../siteComponents/settings/TrapezoidUp";

import NavBarStyle from "./Navbar.module.scss"

class NavBarSubMenu extends Component {
	render() {
	let classna = NavBarStyle.NavBarSubMenu;

	if(this.props.zindex) {
		classna += " " + NavBarStyle.ZIndex;
		}
		return (<div className={classna}>
			{this.props.trapezoid && <TrapezoidUp />}
			{ this.props.children}
			
		</div >);
	}
}


export default NavBarSubMenu;
