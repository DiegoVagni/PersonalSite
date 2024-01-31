import { Component } from "react"
import "./stamp.scss"


class Stamp extends Component {
   root = document.documentElement;
	render() {

		let stampContent = {
			backgroundColor: this.props.color,

		}
		let stampContainer = {
			backgroundColor: this.props.borderColor,
			transform: "rotateZ(" + (this.props.rot ? this.props.rot : 0) + ")",
			position: "fixed",
			right: "130px",
			top: "85px",
			zIndex: "2"
		}
		this.root?.style.setProperty(
			"--base-color",
			this.props.parentColor
		);
		return (
			<div style={stampContainer}>
				<div style={stampContent} className={"stamp"}><p>{this.props.children}</p></div>
			</div>

		)
	}
}

export default Stamp