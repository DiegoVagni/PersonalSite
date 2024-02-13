import { Component } from "react";
import TrapezoidUp from "../../siteComponents/settings/TrapezoidUp";
import styleSheet from "../../../utils/StyleSheet"
class NavBarSubMenu extends Component {

	render() {

		return (<div style={styleSheet.getLayoutstyle("NavBar_SubMenu")}>
			<TrapezoidUp />
			{ this.props.children}
			
		</div >);
	}
}


export default NavBarSubMenu;
