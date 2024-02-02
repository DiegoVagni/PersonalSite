import { Component } from "react";
import TrapezoidUp from "../../siteComponents/settings/TrapezoidUp";
import StyleSheet from "../../../utils/StyleSheet"
class NavBarSubMenu extends Component {

	render() {

		return (<div style={StyleSheet.getLayoutStyle("NavBar_SubMenu")}>
			<TrapezoidUp />
			{ this.props.children}
			
		</div >);
	}
}


export default NavBarSubMenu;
