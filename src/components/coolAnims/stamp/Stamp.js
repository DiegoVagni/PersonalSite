import { Component } from "react"
import StampStyle from "./Stamp.module.scss"

class Stamp extends Component {
	render() {
		let cont = StampStyle.StampContainer;
		let stamp = StampStyle.Stamp;
		if (this.props.Stamp === "new") {
			cont += " " + StampStyle.NewOut;
			stamp += " " + StampStyle.NewIn;
		} else if (this.props.Stamp === "cool") {
			cont += " " + StampStyle.CoolOut;
			stamp += " " + StampStyle.CoolIn;
		}

		const rotation = this.props.rot ? this.props.rot : "0deg";

		return (
			<div className={cont} style={{ transform: `rotateZ(${rotation})` }}>
				<div className={stamp}><p>{this.props.children}</p></div>
			</div>
		)
	}
}

export default Stamp
