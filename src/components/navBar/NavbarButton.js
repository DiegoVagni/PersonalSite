import { Component } from "react";

import { Link } from "react-router-dom";

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
		let navBarButtonColor = this.props.StyleSheet.Style("Navbar_Color");
		let navBarActiveButtonColor = this.props.StyleSheet.Style("Navbar_Active_Button_Color");
		let navBarHoverButtonColor = this.props.StyleSheet.Style("Navbar_Hover_Button_Color");
		let navBarTextButtonColor = this.props.StyleSheet.Style("Navbar_Text_Color");
		let navBarActiveTextButtonColor = this.props.StyleSheet.Style("Navbar_ActiveText_Button_Color");
		let navBarHoverTextButtonColor = this.props.StyleSheet.Style("Navbar_Hover_Text_Button_Color");
		let borderColor = this.props.StyleSheet.Style("Navbar_Button_Border_Color");

		var colorbutton, colorText,boxShadow;
		if (this.props.location == this.props.to) {
			colorbutton = navBarActiveButtonColor;
			colorText = navBarActiveTextButtonColor;
			boxShadow="0px 0px 0px 0px black"
		} else if (this.state.hovered) {
			colorbutton = navBarHoverButtonColor;
			colorText = navBarHoverTextButtonColor;
			boxShadow = "0px 7px 10px -7px " + this.props.StyleSheet.Style("Shadow")
		} else {
			colorbutton = navBarButtonColor;
			colorText = navBarTextButtonColor;
			boxShadow = "0px 7px 10px -7px " + this.props.StyleSheet.Style("Shadow")
		}
		var ButtonStyle = {
			backgroundColor: colorbutton,
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
			borderLeft: "1px solid " + borderColor,
			borderRight: "1px solid " + borderColor,
			display: "flex",
			maxHeight: "50px",
			textDecoration: "none",
			boxShadow: boxShadow
		}
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color: colorText
		}
		return (
			<Link onMouseEnter={this.activeHover} onMouseLeave={this.deactiveHover} style={ButtonStyle} to={this.props.to}><p style={textStyle}>{this.props.children}</p></Link>
		)
	}
}
export default NavBarButton;