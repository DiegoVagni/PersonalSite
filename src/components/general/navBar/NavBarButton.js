import { Component } from "react";

import { Link } from "react-router-dom";
import styleSheet from "../../../utils/StyleSheet"
class NavBarButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		};
		this.activeHover = this.activeHover.bind(this);
		this.deactiveHover = this.deactiveHover.bind(this);
	}
	activeHover() {
		this.setState({ hovered: true });
	}
	deactiveHover() {
		this.setState({ hovered: false });
	}
	render() {
		var colorbutton, colorText,boxShadow;
		if (this.props.location == this.props.to) {
			colorbutton = styleSheet.style("Navbar_Active_Button_Color");
			colorText = styleSheet.style("Navbar_ActiveText_Button_Color");
			boxShadow = "0px 0px 0px 0px black"
		} else {
			if (this.state.hovered) {
				colorbutton = styleSheet.style("Navbar_Hover_Button_Color");
				colorText = styleSheet.style("Navbar_Hover_Text_Button_Color");
			} else {
				colorbutton = styleSheet.style("Navbar_Color");
				colorText = styleSheet.style("Navbar_Text_Color");
			}
			boxShadow = "0px 7px 10px -7px " + styleSheet.style("Shadow")
		}

		var Buttonstyle = {
			backgroundColor: colorbutton,
			boxShadow: boxShadow
		}
		let textstyle = {
			color: colorText
		}
		return (
			<Link onClick={this.props.onClick } onMouseEnter={this.activeHover} onMouseLeave={this.deactiveHover} style={{ ...Buttonstyle,...styleSheet.getLayoutstyle("NavBar_Button") }} to={this.props.to}><p style={{ ...textstyle, ...styleSheet.getLayoutstyle("NavBar_Text") }}>{this.props.children}</p></Link>
		)
	}
}
export default NavBarButton;