import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
class TrapezoidUp extends Component {

	render() {
		let navbarColor = StyleSheet.Style("Navbar_Color");
		let centerSpanStyle = {
			content: "",
			borderLeft: "12px solid " + navbarColor,
			borderRight: "12px solid " + navbarColor,
			borderTop: "1px solid " + navbarColor,
			borderBottom: "5px solid " + navbarColor
		}
		let leftSpanStyle = {
			position: "absolute",
			left: "-50%",
			top: "-5%",
			content: "",
			borderRight: " 7px solid " + navbarColor,
			borderLeft: "7px solid transparent",
			borderTop: "7px solid transparent ",
			borderBottom: "10px solid " + navbarColor
		}

		let rightSpanStyle = {
			position: "absolute",
			content: "",
			borderLeft: " 7px solid " + navbarColor,
			borderRight: "7px solid transparent",
			borderTop: "7px solid transparent ",
			borderBottom: "10px solid" + navbarColor
		}
		let trapezoidStyle = {
			position: "absolute",
			right: "20px",
			top: "100%"
		}

		return (

			<div style={trapezoidStyle}>
				<span style={leftSpanStyle}></span>
				<span style={centerSpanStyle}></span>
				<span style={rightSpanStyle}></span>
			</div>
		)
	}
}
export default TrapezoidUp;