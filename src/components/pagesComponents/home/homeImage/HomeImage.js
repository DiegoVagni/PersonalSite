import { Component } from "react";
import Home from "../../../../resources/images/Mitro.jpg"
import Locale from "../../../../utils/Locale";
import StyleSheet from "../../../../utils/StyleSheet";
import HomeLink from "./HomeLink";
class HomeImage extends Component {
	degToRad(deg) {
		return deg * (Math.PI / 180);
	}
	render() {
		let borderRadius = 150;
let linkColor = StyleSheet.Style("Home_Links_Color")
	    
		let ImageStyle = {
		
			borderRadius: borderRadius + "px",
			width: borderRadius * 2 + "px",
			height: borderRadius * 2 + "px"
		}

		return (
			<div style={StyleSheet.getLayoutStyle("Home_Container")} >
				<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={0.2} yOffset={-40} dashXOffset={0} dashYOffset={-245} to={"/contacts"} text={Locale.GetMessages("Navbar_contact")} up={false}></HomeLink>
				<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={0} xOffset={0.1} yOffset={0} dashXOffset={-20} dashYOffset={-25} to={"/about"} text={Locale.GetMessages("Navbar_about")} up={false}></HomeLink>
				<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={-3.2} yOffset={30} dashXOffset={-300} dashYOffset={420} to={"/projects"} text={Locale.GetMessages("Navbar_projects")} up={true}> </HomeLink>
				<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={45} xOffset={-3.3} yOffset={-40} dashXOffset={-300} dashYOffset={-440} to={"/skills"} text={Locale.GetMessages("Navbar_cv")} up={false}></HomeLink>

			

				<img style={{...ImageStyle, ...StyleSheet.getLayoutStyle("Home_Image")}} src={Home} alt="Home" />
		
			</div>
		);
	}
}
export default HomeImage;
