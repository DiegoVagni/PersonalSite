import { Component } from "react"
import "./stamp.css"


class Stamp extends Component {
	render() {
	
		let divStyle = {
			backgroundColor: this.props.color,
			
		}
		let outerStyle = {
			backgroundColor:this.props.borderColor,
			transform: "rotateZ(" + (this.props.rot ? this.props.rot : 0) + ")",
			position: "fixed",
			right: "130px",
			top: "85px",
			zIndex: "2"
}
		return (
			<div style={outerStyle}>
			<div style={divStyle} className={"stamp"}><p>{this.props.children}</p></div>
			</div>

			)
	}
}

export default Stamp