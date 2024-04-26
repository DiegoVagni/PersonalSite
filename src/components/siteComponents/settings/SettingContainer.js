import { Component } from "react"
import Flexes from "../../../scss/Flexes.module.scss"
class SettingContainer extends Component {
	
	render() {

	
		return (

			<div className={Flexes.FlexRowStart }>
				{this.props.children}
			</div>
		)
	}
}
export default SettingContainer;