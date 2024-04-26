import { Component } from "react"
import StampStyle from "./Stamp.module.scss"


class Stamp extends Component {
   root = document.documentElement;
	render() {
		let cont = StampStyle.StampContainer;
		let stamp = StampStyle.Stamp;
		if (this.props.Stamp == "new") {
			cont += " " + StampStyle.NewOut;
			stamp += " " + StampStyle.NewIn;
		} else if (this.props.Stamp == "cool") {
			cont += " " + StampStyle.CoolOut;
			stamp += " " + StampStyle.CoolIn;
		}
		this.root?.style.setProperty(
			"--base-stamp-color",
			this.props.parentColor
		);
		
		this.root?.style.setProperty(
			"--base-stamp-rot",
			this.props.rot ? this.props.rot: "0 deg"
		);
		

		return (
			<div className={cont}>
				<div  className={stamp}><p>{this.props.children}</p></div>
			</div>

		)
	}
}

export default Stamp