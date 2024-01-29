import { Component } from "react";
import TrapezoidUp from "../settings/TrapezoidUp";

class NavBarSubMenu extends Component {

	render() {
		
		
		let outerStyle = {
			display: "flex",
			flexDirection: "Column",
			alignItems: "center",
			backgroundColor: this.props.navBarColor,
			width: "auto",
			minHeight: "50px"
		}


		return (<div style={outerStyle}>
			<TrapezoidUp StyleSheet={this.props.StyleSheet} />
			{ this.props.children}
			
		</div >);
	}
}


export default NavBarSubMenu;
