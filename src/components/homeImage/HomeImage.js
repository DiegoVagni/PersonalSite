import { Component } from "react";
import Home from "../../resources/images/Mitro.jpg"
import Locale from "../../utils/Locale";
import HomeLink from "./HomeLink";
class HomeImage extends Component {
	degToRad(deg) {
		return deg * (Math.PI / 180);
	}
	render() {
		let borderRadius = 150;
let linkColor = this.props.StyleSheet.Style("Home_Links_Color")
	    
		let ImageStyle = {
			border: "10px solid " + linkColor,
			borderRadius: borderRadius + "px",
			width: borderRadius * 2 + "px",
			height: borderRadius * 2 + "px"
		}

		let divStyle = {
			width: "100%",
			height: "100%",
			minWidth:"900px",
			top: "5%",
			left: "15%",
			position:"fixed",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		
		}
		return (
			<div style={divStyle}>
				
				<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={0.1} yOffset={-0.5} dashXOffset={-150} dashYOffset={-91} to={"/contacts"} text={Locale.GetMessages("Navbar_contact")} up={false}></HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={0} xOffset={0} yOffset={0} dashXOffset={-150} dashYOffset={-4} to={"/about"} text={Locale.GetMessages("Navbar_about")} up={false}></HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={-3} yOffset={2.4} dashXOffset={-600} dashYOffset={328} to={"/projects"} text={Locale.GetMessages("Navbar_projects")} up={true}> </HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={45} xOffset={-3.3} yOffset={-2.5} dashXOffset={-575} dashYOffset={-290} to={"/skills"} text={Locale.GetMessages("Navbar_cv")} up={false}></HomeLink>
							
				
					<img style={ImageStyle} src={Home} alt="Home" />
		
			</div>
		);
	}
}
export default HomeImage;
