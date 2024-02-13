import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
class TrapezoidUp extends Component {

	render() {
		let navbarColor = styleSheet.style("Navbar_Color");
		let centerSpanstyle = {
			content: "",
			borderLeft: "12px solid " + navbarColor,
			borderRight: "12px solid " + navbarColor,
			borderTop: "1px solid " + navbarColor,
			borderBottom: "5px solid " + navbarColor
		}
		let leftSpanstyle = {
			position: "absolute",
			left: "-50%",
			top: "-5%",
			content: "",
			borderRight: " 7px solid " + navbarColor,
			borderLeft: "7px solid transparent",
			borderTop: "7px solid transparent ",
			borderBottom: "15px solid " + navbarColor
		}

		let rightSpanstyle = {
			position: "absolute",
			content: "",
			borderLeft: " 7px solid " + navbarColor,
			borderRight: "7px solid transparent",
			borderTop: "7px solid transparent ",
			borderBottom: "15px solid" + navbarColor
		}
		let trapezoidstyle = {
			position: "absolute",
			right: "20px",
			top: "100%"
		}

		return (

			<div style={trapezoidstyle}>
				<span style={leftSpanstyle}></span>
				<span style={centerSpanstyle}></span>
				<span style={rightSpanstyle}></span>
			</div>
		)
	}
}
export default TrapezoidUp;