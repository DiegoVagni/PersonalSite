import { Component } from "react";

import { Link } from "react-router-dom";
import StyleSheet from "../../../utils/StyleSheet"
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
			colorbutton = StyleSheet.Style("Navbar_Active_Button_Color");
			colorText = StyleSheet.Style("Navbar_ActiveText_Button_Color");
			boxShadow = "0px 0px 0px 0px black"
		} else {
			if (this.state.hovered) {
				colorbutton = StyleSheet.Style("Navbar_Hover_Button_Color");
				colorText = StyleSheet.Style("Navbar_Hover_Text_Button_Color");
			} else {
				colorbutton = StyleSheet.Style("Navbar_Color");
				colorText = StyleSheet.Style("Navbar_Text_Color");
			}
			boxShadow = "0px 7px 10px -7px " + StyleSheet.Style("Shadow")
		}

		var ButtonStyle = {
			backgroundColor: colorbutton,
			boxShadow: boxShadow
		}
		let textStyle = {
			color: colorText
		}
		return (
			<Link onMouseEnter={this.activeHover} onMouseLeave={this.deactiveHover} style={{ ...ButtonStyle,...StyleSheet.getLayoutStyle("NavBar_Button") }} to={this.props.to}><p style={{ ...textStyle, ...StyleSheet.getLayoutStyle("NavBar_Text") }}>{this.props.children}</p></Link>
		)
	}
}
export default NavBarButton;