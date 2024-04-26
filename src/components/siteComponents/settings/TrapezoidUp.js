import { Component } from "react"
import TrapezoidStyle from "./Settings.module.scss"
class TrapezoidUp extends Component {

	render() {
		return (
			<div className={TrapezoidStyle.Trapezoid } >
				<span className={TrapezoidStyle.LeftSpan } ></span>
				<span className={TrapezoidStyle.CenterSpan }></span>
				<span className={TrapezoidStyle.RightSpan }></span>
			</div>
		)
	}
}
export default TrapezoidUp;