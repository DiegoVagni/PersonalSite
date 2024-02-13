import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
class SettingContainer extends Component {
	
	render() {

	
		return (

			<div style={styleSheet.getLayoutstyle("Setting_Container")}>
				{this.props.children}
			</div>
		)
	}
}
export default SettingContainer;