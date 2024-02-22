import { Component } from "react";
import TrapezoidUp from "../../siteComponents/settings/TrapezoidUp";

import NavBarStyle from "./Navbar.module.scss"

class NavBarSubMenu extends Component {

	render() {

		return (<div className={NavBarStyle.NavBarSubMenu}>
			{this.props.trapezoid && <TrapezoidUp />}
			{ this.props.children}
			
		</div >);
	}
}


export default NavBarSubMenu;
