import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
class SettingContainer extends Component {
	
	render() {

	
		return (

			<div style={StyleSheet.getLayoutStyle("Setting_Container")}>
				{this.props.children}
			</div>
		)
	}
}
export default SettingContainer;